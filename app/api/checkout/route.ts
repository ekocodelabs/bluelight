// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createSupabaseServerClient } from "@/lib/server-clients";

// Use the Stripe SDK's default API version to avoid version mismatches.
// The previous hard-coded version string caused initialization to fail before checkout could start.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { itemId, itemName, priceAmount, quantity, bookingDate, itemType } =
      body;

    // 1. Core baseline structural parameters verification checks
    if (!itemId || !priceAmount || !itemType) {
      return NextResponse.json(
        { error: "Missing checkout parameters." },
        { status: 400 },
      );
    }

    // 2. Initialize your secure server-side Supabase client wrapper
    const supabase = await createSupabaseServerClient();

    // 3. Extract verified user session context from active cookie credentials
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      return NextResponse.json(
        { error: "Authentication session expired." },
        { status: 401 },
      );
    }

    // 4. PRE-INSERT PENDING LOGIC RECORD ENTRY (Database Integrity Practice)
    // Create an order tracker row flagged as 'pending' to catch edge errors
    const { data: orderRow, error: orderError } = await supabase
      .from("activity_bookings")
      .insert({
        user_id: user.id,
        user_email: user.email,
        item_id: itemId,
        item_name: itemName,
        item_type: itemType, // 'room' | 'spa' | 'boardroom'
        amount_paid: priceAmount * (quantity || 1),
        booking_date: bookingDate,
        status: "pending", // Will safely transition to 'confirmed' inside webhooks
      })
      .select()
      .single();

    if (orderError || !orderRow) {
      return NextResponse.json(
        { error: `Database Order Error: ${orderError?.message}` },
        { status: 500 },
      );
    }

    // 5. provision STRIPE SECURE SESSION CONFIGURATION CHECKOUT BLOCK
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd", // Swap with preferred currency code mapping configurations if needed
            product_data: {
              name: itemName,
              description: `Blue Light Premium Reservation booking for ${bookingDate}`,
            },
            unit_amount: Math.round(priceAmount * 100), // Stripe calculates currencies in absolute base units (cents)
          },
          quantity: quantity || 1,
        },
      ],
      mode: "payment",
      success_url: `${new URL(request.url).origin}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${new URL(request.url).origin}/profile`,
      // Attach system metadata indicators to identify rows securely in the webhook framework
      metadata: {
        supabase_order_id: orderRow.id,
        user_id: user.id,
      },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown checkout error.";

    console.error("❌ CRITICAL CHECKOUT SESSION FAILURE:", message);
    return NextResponse.json(
      { error: "Checkout session execution failed." },
      { status: 500 },
    );
  }
}
