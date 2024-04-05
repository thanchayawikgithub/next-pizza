"use client";
import { Button } from "@/components/ui/button";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export const NavMenu = async () => {
  return (
    <div className="flex items-center justify-end gap-x-4">
      <Link href="/menu">
        <Button variant="ghost" className="text-xl">
          Menu
        </Button>
      </Link>
      <Button size="icon" variant="ghost" className="relative">
        <div className="absolute -top-1 -right-1 bg-black text-white rounded-full text-xs p-1">
          10
        </div>
        <ShoppingBag size={30} />
      </Button>

      <Link href="/login">
        <Button className="rounded-none text-xl" size="lg">
          Sign In
        </Button>
      </Link>
    </div>
  );
};
