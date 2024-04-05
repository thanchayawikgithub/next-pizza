"use client";
import { MenuCard } from "@/components/menu/menu-card";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function MenuList() {
  const supabase = createClient();
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isRecommend, setIsRecommend] = useState(false);

  const fetchPizzas = async () => {
    let query = supabase
      .from("pizzas")
      .select("*")
      .ilike("name", `%${search}%`)
      .order("recommend", { ascending: false });
    if (isRecommend) {
      query = query.eq("recommend", true);
    }

    let { data, error } = await query;

    if (error) {
      console.log(error);
    }

    setPizzas(data!);
  };

  useEffect(() => {
    fetchPizzas();
  }, [search, isRecommend]);

  return (
    <>
      {" "}
      <div className="w-full flex justify-end">
        <div className="flex items-center space-x-2 mr-5">
          <input
            id="recommend"
            type="checkbox"
            className="accent-black"
            style={{ transform: "scale(1.3)" }}
            onChange={() => setIsRecommend(!isRecommend)}
          ></input>
          <label
            htmlFor="terms"
            className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            recommend
          </label>
        </div>
        <Input
          className="max-w-[350px]"
          placeholder="Search for menu"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {(!pizzas || pizzas.length === 0) && (
        <div className="w-full flex justify-center mt-10 text-xl">
          No Menu Available
        </div>
      )}
      {pizzas && (
        <div className="grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
          {" "}
          {pizzas.map((pizza) => (
            <MenuCard pizza={pizza} key={pizza.id} />
          ))}
        </div>
      )}
    </>
  );
}
