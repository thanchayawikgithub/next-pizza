import { cn } from "@/lib/utils";
import { NavMenu } from "./nav-menu";
import { Mr_Dafoe } from "next/font/google";

import Link from "next/link";

const font = Mr_Dafoe({ subsets: ["latin"], weight: ["400"] });
export const NavBar = () => {
  return (
    <nav className="grid grid-cols-2 h-[12vh] items-center">
      <Link href="/" className="max-w-[200px]">
        <h1 className={cn("text-7xl w-full", font.className)}>Friday</h1>
      </Link>
      <NavMenu />
    </nav>
  );
};
