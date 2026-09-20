"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiGrid,
  FiLogOut,
  FiUser,
  FiLoader,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/browser-client";

// Shadcn UI Dropdown Menu Imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = getSupabaseBrowserClient();
  const router = useRouter();

  const handleLogout = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      setIsOpen(false);
      router.push("/loginpage");
    } catch (error) {
      console.error("Error signing out:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setCurrentUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setCurrentUser(session?.user ?? null);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          className="flex flex-col tracking-widest text-sky-900 group"
        >
          <span className="font-serif text-xl font-semibold uppercase">
            Bluelight
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-sky-500 transition-colors group-hover:text-sky-600">
            Hotel & Resort
          </span>
        </Link>

        {/* Desktop Navigation Link Blocks */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide text-slate-600">
          <Link
            href="/#overview"
            className="hover:text-sky-600 transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/#services"
            className="hover:text-sky-600 transition-colors"
          >
            Services
          </Link>
          <Link href="/rooms" className="hover:text-sky-600 transition-colors">
            Rooms
          </Link>
          <Link href="/dining" className="hover:text-sky-600 transition-colors">
            Dining
          </Link>
          <Link
            href="/experiences"
            className="hover:text-sky-600 transition-colors"
          >
            Experiences
          </Link>
          <Link
            href="/meetings"
            className="hover:text-sky-600 transition-colors"
          >
            Board Meetings
          </Link>
        </div>

        {/* Desktop Action Action Trigger Panel */}
        <div className="hidden lg:flex items-center gap-3">
          {currentUser ? (
            /* Premium Dropdown Interface for Authenticated Users */
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="w-10 h-10 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-900 hover:bg-sky-100 transition-colors focus:outline-none shadow-sm"
                  aria-label="User menu"
                >
                  <FiUser className="text-lg" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 rounded-xl p-1.5 border-slate-100 shadow-xl bg-white mt-1"
              >
                <DropdownMenuLabel className="text-xs font-semibold text-slate-400 px-2.5 py-1.5">
                  {currentUser.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-100 my-1" />

                {/* Field 1: Dashboard Context Route */}
                <DropdownMenuItem
                  asChild
                  className="rounded-lg focus:bg-sky-50 focus:text-sky-900 cursor-pointer"
                >
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-2.5 py-2 text-sm font-medium text-slate-700"
                  >
                    <FiGrid className="text-base text-slate-400 group-hover:text-sky-600" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>

                {/* Field 2: Sign Out Control Trigger Block */}
                <DropdownMenuItem
                  onClick={handleLogout}
                  disabled={loading}
                  className="rounded-lg focus:bg-red-50 focus:text-red-600 text-red-600 cursor-pointer"
                >
                  <div className="flex items-center gap-2 px-2.5 py-2 text-sm font-medium w-full">
                    {loading ? (
                      <FiLoader className="text-base animate-spin" />
                    ) : (
                      <FiLogOut className="text-base" />
                    )}
                    <span>{loading ? "Signing out..." : "Logout"}</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                asChild
                variant="outline"
                className="rounded-xl px-5 text-xs h-10 border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                <Link href="/loginpage">Sign In</Link>
              </Button>
              <Button
                asChild
                className="bg-sky-600 hover:bg-sky-700 text-white rounded-xl px-5 text-xs h-10 shadow-sm shadow-sky-100"
              >
                <Link href="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Toggle Action Trigger Switch */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-sky-900 focus:outline-none hover:bg-sky-50/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-sky-100 px-6 py-8 flex flex-col space-y-6 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <Link
            href="/#overview"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium hover:text-sky-600 transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/#services"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium hover:text-sky-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/rooms"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium hover:text-sky-600 transition-colors"
          >
            Rooms
          </Link>
          <Link
            href="/dining"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium hover:text-sky-600 transition-colors"
          >
            Dining
          </Link>
          <Link
            href="/experiences"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium hover:text-sky-600 transition-colors"
          >
            Experiences
          </Link>
          <Link
            href="/meetings"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 font-medium hover:text-sky-600 transition-colors"
          >
            Board Meetings
          </Link>

          {/* Mobile Conditional Auth Control Section */}
          <div className="pt-4 border-t border-slate-100">
            {currentUser ? (
              <div className="flex flex-col gap-3">
                <div className="px-1 text-xs font-medium text-slate-400 truncate">
                  Logged in as: {currentUser.email}
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex-1 h-11 text-xs"
                  >
                    <Link
                      href="/profile"
                      className="flex items-center justify-center gap-1.5"
                    >
                      <FiGrid className="text-sm" />
                      <span>Profile</span>
                    </Link>
                  </Button>
                  <Button
                    onClick={handleLogout}
                    disabled={loading}
                    variant="outline"
                    className="rounded-xl flex-1 h-11 text-xs border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    {loading ? (
                      <FiLoader className="text-sm animate-spin" />
                    ) : (
                      <FiLogOut className="text-sm" />
                    )}
                    <span>{loading ? "Signing out..." : "Logout"}</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <Button
                  asChild
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  className="rounded-xl flex-1 h-11 text-xs border-slate-200"
                >
                  <Link href="/loginpage">Sign In</Link>
                </Button>
                <Button
                  asChild
                  onClick={() => setIsOpen(false)}
                  className="bg-sky-600 hover:bg-sky-700 text-white rounded-xl flex-1 h-11 text-xs"
                >
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
