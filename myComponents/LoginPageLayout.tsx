"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

// Note: Ensure you have your Shadcn primitives installed:
// npm i @radix-ui/react-label @radix-ui/react-slot class-variance-authority clsx tailwind-merge
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

import { getSupabaseBrowserClient } from "@/lib/browser-client";

export default function LoginPageLayout() {
  // State handles visibility toggle for password and loading indicator
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Add authentication and backend login routing here
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to sign in.");
      }

      // Success redirect pattern mapping into Next.js router
      router.push("/");
    } catch (err: any) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
    setTimeout(() => setIsLoading(false), 2000); // Mock delay
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=/`,
        },
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans">
      {/* LEFT COLUMN: Aesthetic Branding & Showcasing (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-col justify-between relative w-1/2 bg-linear-to-br from-sky-400 to-blue-600 p-12 text-white overflow-hidden">
        {/* Subtle geometric pattern overlay for high-end feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />

        {/* Brand Logo / Identity */}
        <div className="relative z-10 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">BL</span>
          </div>
          <span className="font-semibold tracking-wider text-xl uppercase">
            Blue Light
          </span>
        </div>

        {/* Hero Visual Block */}
        <div className="relative z-10 my-auto max-w-md space-y-6">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Image from public folder matching Next.js optimization criteria */}
            <Image
              src="/images/hotelbanner2.jpg"
              alt="Premium verified shortlet interior in Nigeria"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 0vw, 50vw"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold leading-tight">
              Welcome Back to Premium Living.
            </h1>
            <p className="text-sky-100/90 text-sm leading-relaxed">
              Log in to manage your premium reservations, check exclusive
              staycation rewards, and access luxury apartments seamlessly.
            </p>
          </div>
        </div>

        {/* Footer info within layout block */}
        <div className="relative z-10 text-xs text-sky-200/70">
          &copy; {new Date().getFullYear()} Blue Light Bookings Ltd. All rights
          reserved.
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive Form Interface (Fully Responsive) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 py-12 bg-slate-50/50">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-slate-100 shadow-sm sm:shadow-md md:shadow-lg transition-all">
          {/* Header Mobile Header Block */}
          <div className="space-y-2 mb-8">
            <div className="lg:hidden flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">BL</span>
              </div>
              <span className="font-semibold text-blue-600 tracking-wide text-md uppercase">
                Blue Light
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-slate-500">
              Enter your details below to log into your account.
            </p>
          </div>

          {/* Social Sign In Action */}
          <Button
            variant="outline"
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full flex items-center justify-center gap-2 h-11 border-slate-200 text-slate-700 hover:bg-slate-50 font-medium transition-all"
          >
            <FcGoogle className="text-lg" />
            <span>Continue with Google</span>
          </Button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-medium">
                Or sign in with email
              </span>
            </div>
          </div>

          {/* Sign In Interactive Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Address Input Field */}
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-xs font-semibold text-slate-700"
              >
                Email Address
              </Label>
              <div className="relative">
                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="pl-10 h-11 border-slate-200 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all text-sm"
                />
              </div>
            </div>

            {/* Password Input Field with View/Hide Switch Toggle */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-xs font-semibold text-slate-700"
                >
                  Password
                </Label>
                <Link
                  href="/resetpassword"
                  className="text-xs font-medium text-blue-600 hover:underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
                <Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="pl-10 pr-10 h-11 border-slate-200 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-all text-sm"
                />
                {/* Visibility Action trigger button */}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <FiEyeOff className="text-base" />
                  ) : (
                    <FiEye className="text-base" />
                  )}
                </button>
              </div>
            </div>

            {/* Execution / Submit CTA */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-colors mt-6"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          {/* Shift direction to Sign Up Page */}
          <div className="text-center mt-6 text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:underline font-semibold transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
