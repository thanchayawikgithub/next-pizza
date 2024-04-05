"use client";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

import Link from "next/link";
import { ShoppingBagButton } from "./shopping-bag-button";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCustomizeDialogStore } from "@/store/customizeDialog";

export const NavMenu = () => {
  const supabase = createClient();
  const { isOpen } = useCustomizeDialogStore();
  const [user, setUser] = useState<User | null>(null);
  const [cartItemCounts, setCartItemCounts] = useState(0);

  const getUserData = async () => {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (authUser) {
      let { data: user, error: getUserError } = await supabase
        .from("users")
        .select("*")
        .eq("id", authUser.id)
        .maybeSingle();

      if (getUserError) {
        console.error(getUserError);
      }

      setUser(user);
      getCartItemCount(user);
    }
  };

  const getCartItemCount = async (user: User | null) => {
    if (!user) return 0;

    let { data: cart_items, error: getCartItemError } = await supabase
      .from("cart_items")
      .select("id")
      .eq("cart_id", user?.id);

    if (getCartItemError) {
      console.error(getCartItemError);
    }
    setCartItemCounts(cart_items?.length || 0);
  };

  useEffect(() => {
    if (isOpen === false) {
      getCartItemCount(user);
    }
  }, [isOpen]);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex items-center justify-end gap-x-4">
      <Link href="/menu">
        <Button variant="ghost" className="text-xl">
          Menu
        </Button>
      </Link>
      {/* <ShoppingBagButton /> */}
      <Link href="/cart">
        <Button size="icon" variant="ghost" className="relative">
          <div className="absolute -top-1 -right-1 bg-black text-white text-xs  rounded-full w-5 h-5 flex items-center justify-center">
            {cartItemCounts}
          </div>
          <ShoppingBag size={30} />
        </Button>
      </Link>
      {user ? (
        <Button className="rounded-none text-lg" size="lg">
          {user.firstname} {user.lastname.charAt(0)}.
        </Button>
      ) : (
        <Link href="/login">
          <Button className="rounded-none text-xl" size="lg">
            Sign In
          </Button>
        </Link>
      )}
    </div>
  );
};
