"use client";
import { Button } from "@/components/ui/button";

import { ChevronDown, ShoppingBag } from "lucide-react";
import Link from "next/link";

export const NavMenu = async () => {
  return (
    <div className="flex items-center justify-end gap-x-4">
      <Link href="/menu">
        <Button variant="ghost" className="text-xl">
          Menu
        </Button>
      </Link>
      <Button size="icon" variant="ghost">
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
