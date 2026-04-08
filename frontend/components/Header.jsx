import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Cookie,Refrigerator, Sparkles } from "lucide-react";
import UserDropDown from "./UserDropDown";
import {checkUser} from "@/lib/checkUser"
import PricingModal from "./PricingModal";
import { Badge } from "./ui/badge";
import HowToCookModal from "./HowToCookModal";

const Header = async() => {
  const user=await checkUser();
  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href={user?'/dashboard':'/'} className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-200 bg-white shadow-sm md:h-14 md:w-14">
            <Image
              src="/orange-logo.png"
              alt="SmartChefAI Logo"
              width={112}
              height={112}
              className="h-8 w-8 object-contain md:h-10 md:w-10"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-base font-black leading-none tracking-tight text-stone-900 md:text-lg">
              SmartChefAI
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-600">
              Cook smarter
            </p>
          </div>
        </Link>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <Link
            href="/recipes"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Cookie className="w-4 h-4" />
            My Recipes
          </Link>
          <Link
            href="/pantry"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Refrigerator className="w-4 h-4" />
            My Pantry
          </Link>
        </div>
        <div className="flex items-center space-x-4">
            <SignedIn> 
                {/* How to Cook */}
                <HowToCookModal />
                {/* Pricing Modal with Built-in Trigger */}
                {user && (
                  <PricingModal subscriptionTier={user.subscriptionTier}>
                    <Badge
                      variant="outline"
                      className={`flex h-8 px-3 gap-1.5 rounded-full text-xs font-semibold transition-all ${
                        user.subscriptionTier === "pro"
                          ? "bg-linear-to-r from-orange-600 to-amber-500 text-white border-none shadow-sm"
                          : "bg-stone-200/50 text-stone-600 border-stone-200 cursor-pointer hover:bg-stone-300/50 hover:border-stone-300"
                      }`}
                    >
                      <Sparkles
                        className={`h-3 w-3 ${
                          user.subscriptionTier === "pro"
                            ? "text-white fill-white/20"
                            : "text-stone-500"
                        }`}
                      />
                      <span>
                        {user.subscriptionTier === "pro" ? "Pro Chef" : "Free Plan"}
                      </span>
                    </Badge>
                  </PricingModal>
                )}
                <UserDropDown />
            </SignedIn>

            <SignedOut>
                <SignInButton mode="modal">
                    <Button variant="ghost" className="text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                    <Button variant="primary" className="rounded-full px-6">Get Started</Button>
                </SignUpButton>
            </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
