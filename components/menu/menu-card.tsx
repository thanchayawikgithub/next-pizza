import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useCustomizeDialogStore } from "@/store/customizeDialog";
import { Plus, ThumbsUp } from "lucide-react";
import { Mr_Dafoe } from "next/font/google";

import Image from "next/image";
import AddButton from "./add-button";

const font = Mr_Dafoe({ subsets: ["latin"], weight: ["400"] });

interface MenuCardProps {
  pizza: Pizza;
}

export const MenuCard = ({ pizza }: MenuCardProps) => {
  return (
    <Card className="rounded-none hover:drop-shadow-md flex flex-col justify-between">
      <CardContent className="flex justify-center items-center flex-col mt-4 relative">
        {pizza.recommend && (
          <p className={cn("absolute -top-2 left-4 text-2xl", font.className)}>
            Recommend
          </p>
        )}
        {pizza.image && (
          <Image
            src={pizza.image}
            alt="pizza"
            width={300}
            height={300}
            style={{ transform: "scale(1.3)" }}
          />
        )}
        <div className="border border-slate-200 w-full my-4" />
        <div>
          <h1 className="text-2xl mb-1 font-semibold">{pizza.name}</h1>
          <p className="text-sm text-slate-500">{pizza.ingrediants}</p>
        </div>
      </CardContent>
      <CardFooter className="flex w-full justify-end">
        <AddButton pizza={pizza} />
      </CardFooter>
    </Card>
  );
};
