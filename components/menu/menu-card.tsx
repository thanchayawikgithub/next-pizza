"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

interface MenuCardProps {
  pizza: Pizza;
}

export const MenuCard = ({ pizza }: MenuCardProps) => {
  return (
    <Card className="rounded-none hover:drop-shadow-md flex flex-col justify-between">
      <CardContent className="flex justify-center items-center flex-col mt-4 group">
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
          <p>{pizza.ingrediants}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col w-full">
        <div className="flex gap-1 w-full justify-end">
          <Button>Buy now</Button>
          <Button>Add to cart</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
