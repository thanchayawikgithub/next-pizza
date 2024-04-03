"use client";
import { Button } from "@/components/ui/button";

import { ChevronDown, ShoppingBag } from "lucide-react";
import Link from "next/link";

export const NavMenu = async () => {
  return (
    <div className="flex items-center justify-end gap-x-4">
      <Button variant="text" className="text-xl hover:animate-pulse">
        Menu <ChevronDown size={20} className="ml-1" />
      </Button>
      <Button size="icon" variant="text">
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
