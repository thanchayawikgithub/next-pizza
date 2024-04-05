"use client";
import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export const ShoppingBagButton = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [cartItemCounts, setCartItemCounts] = useState(0);

  if (user) {
    let { data: cart_items, error } = await supabase
      .from("cart_items")
      .select("*")
      .eq("cart_id", user?.id);

    if (error) {
      console.error(error);
    }

    setCartItemCounts(cart_items?.length || 0);
  }
  return (
    <Button size="icon" variant="ghost" className="relative">
      <div className="absolute -top-1 -right-1 bg-black text-white rounded-full text-xs p-1">
        {cartItemCounts}
      </div>
      <ShoppingBag size={30} />
    </Button>
  );
};
