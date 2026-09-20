// app/api/webhooks/stripe/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createSupabaseServerClient } from "@/lib/server-clients";

// Match the SDK's supported API version instead of hard-coding a string that can be invalid.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const body = await request.text(); // Raw payload parsing string text format required for cryptographic hash checks
  const signature = request.headers.get("stripe-signature");

  let event: Stripe.Event;

  try {
    if (!signature || !webhookSecret) {
      console.error(
        "❌ WEBHOOK ERROR: Missing stripe-signature parameter credentials or local webhook secrets.",
      );
      return new Response("Missing cryptographic validation tokens.", {
        status: 400,
      });
    }

    // Cryptographically verify payload authenticity via incoming signature blocks
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unknown webhook error.";

    console.error(`❌ WEBHOOK CRYPTOGRAPHIC FAILURE: ${message}`);
    return new Response(
      `Webhook Error Signature Validation Failed: ${message}`,
      { status: 400 },
    );
  }

  // =========================================================================
  // 🪵 VERCEL LIFECYCLE MONITORING LOG BLOCK STARTS HERE
  // =========================================================================
  console.log("⚡ [VERCEL LOG] STRIPE WEBHOOK EVENT DETECTED");
  console.log(`➡️ [VERCEL LOG] EVENT ID: ${event.id}`);
  console.log(`➡️ [VERCEL LOG] EVENT TYPE: ${event.type}`);
  // =========================================================================

  // Handle transaction validation resolution paths cleanly
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const orderId = session.metadata?.supabase_order_id;
    const userId = session.metadata?.user_id;

    console.log(
      `💎 [VERCEL LOG] PROCESSING COMPLETED CHECKOUT FOR ORDER ID: ${orderId}`,
    );
    console.log(`💎 [VERCEL LOG] TARGET USER OWNER UUID: ${userId}`);

    if (orderId) {
      const supabase = await createSupabaseServerClient();

      // Update the structural status parameters safely from 'pending' straight into 'confirmed'
      const { error } = await supabase
        .from("activity_bookings")
        .update({
          status: "confirmed",
          stripe_payment_id: session.payment_intent as string,
        })
        .eq("id", orderId)
        .select();

      if (error) {
        console.error(
          `❌ [VERCEL LOG] DATABASE SYNC UPDATE FAIL FOR ORDER: ${orderId}. Reason: ${error.message}`,
        );
        return new Response("Database resolution transaction dropped.", {
          status: 500,
        });
      }

      console.log(
        `✅ [VERCEL LOG] SUCCESS: ORDER STATUS TRANSITION COMPLETED FOR ID: ${orderId}. Database state synced.`,
      );
    } else {
      console.warn(
        "⚠️ [VERCEL LOG] WARNING: checkout.session.completed event metadata missing 'supabase_order_id' reference.",
      );
    }
  } else {
    console.log(
      `ℹ️ [VERCEL LOG] SKIPPING PROCESSING: Unhandled operational baseline event block type: ${event.type}`,
    );
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
