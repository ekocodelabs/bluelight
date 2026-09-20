// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/server-clients";

export async function POST(request: Request) {
  try {
    // 1. Parse incoming login credentials
    const body = await request.json();
    const { email, password } = body;

    // 2. Perform baseline safety validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password parameters are required." },
        { status: 400 },
      );
    }

    // 3. Instantiate server-side Supabase client
    const supabase = await createSupabaseServerClient();

    // 4. Submit login request to Supabase Auth
    // The server client automatically handles setting session tokens onto response cookies
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status || 400 },
      );
    }

    // 5. Respond with user context and active session data structures
    return NextResponse.json(
      {
        message: "Authentication successful.",
        user: data.user,
        session: data.session,
      },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Processing Failure" },
      { status: 500 },
    );
  }
}
