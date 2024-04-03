"use client";
import { cn } from "@/lib/utils";
import { Mr_Dafoe } from "next/font/google";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { MenuCard } from "../menu/menu-card";

const font = Mr_Dafoe({ subsets: ["latin"], weight: ["400"] });
export const RecommendMenu = () => {
  const supabase = createClient();
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  const fetchPizzas = async () => {
    let { data, error } = await supabase
      .from("pizzas")
      .select("*")
      .eq("recommend", "true");
    console.log(data);
    if (error) {
      console.log(error);
    }
    setPizzas(data!);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  if (pizzas.length === 0) {
    return <div>No Recommend Menu</div>;
  }

  return (
    <div className="my-10">
      <h1 className={cn("text-7xl text-center", font.className)}>Recommend</h1>
      <div className="grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
        {" "}
        {pizzas.map((pizza) => (
          <MenuCard pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
};
