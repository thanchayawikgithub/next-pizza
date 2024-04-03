import { cn } from "@/lib/utils";
import { NavMenu } from "./nav-menu";
import { ChevronDown, LucidePizza, Pizza, PizzaIcon } from "lucide-react";
import { Mr_Dafoe } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const font = Mr_Dafoe({ subsets: ["latin"], weight: ["400"] });
export const NavBar = () => {
  return (
    <nav className="grid grid-cols-2 h-[12vh] items-center">
      <Link href="/">
        <h1 className={cn("text-7xl", font.className)}>Friday</h1>
      </Link>
      <NavMenu />
    </nav>
  );
};
