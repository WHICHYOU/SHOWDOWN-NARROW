import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster"; // ✅ Add this

const navItems = [
  { label: "Home", href: "/" },
  { label: "Compare", href: "/compare" },
  { label: "Match", href: "/taste-match" },
  { label: "History", href: "/votes" },
  { label: "Admin", href: "/admin/showdowns" },
];

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gray-50 text-gray-900">
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-bold text-lg tracking-tight">Showdown</div>
        <div className="space-x-2">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" className="text-sm" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
    <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
    <Toaster /> {/* ✅ Add toast display area */}
  </div>
);

export default AppLayout;
