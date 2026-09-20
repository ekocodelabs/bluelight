// app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/server-clients";

export async function POST(request: Request) {
  try {
    // 1. Extract payload variables sent from frontend sign-up form
    const body = await request.json();
    const { email, password, fullName, phone } = body;

    // 2. Validate input constraints cleanly
    if (!email || !password || !fullName || !phone) {
      return NextResponse.json(
        { error: "Missing required registration parameters." },
        { status: 400 },
      );
    }

    // 3. Initialize Server-Side Supabase client
    const supabase = await createSupabaseServerClient();

    // 4. Trigger Supabase auth sign up action
    // Passing complementary registration metadata inside options.data mapping
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          phone_number: phone,
        },
        // Optional: Redirect target after email validation confirmation if active
        emailRedirectTo: `${new URL(request.url).origin}/auth/callback`,
      },
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status || 400 },
      );
    }

    // 5. Check if email verification confirmation flow is required
    const isEmailVerificationRequired =
      data.user &&
      data.user.identities &&
      data.user.identities.length > 0 &&
      !data.session;

    return NextResponse.json(
      {
        message: isEmailVerificationRequired
          ? "Registration initiated successfully. Please verify your email inbox."
          : "Account created successfully.",
        user: data.user,
        session: data.session,
      },
      { status: 201 },
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: "Internal Server Processing Failure" },
      { status: 500 },
    );
  }
}
