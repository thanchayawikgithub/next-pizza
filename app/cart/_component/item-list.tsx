import { createClient } from "@/utils/supabase/server";
import { ItemCard } from "./item-card";

export const ItemList = async () => {
  const supabase = createClient();

  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  if (getUserError) {
    console.error(getUserError);
  }

  if (!user) {
    return null;
  }

  let { data: cart_items, error } = await supabase
    .from("cart_items")
    .select("*")
    .eq("cart_id", user.id);

  if (error) {
    console.error(error);
  }

  if (!cart_items || cart_items.length === 0) {
    return <div>No items in cart</div>;
  }

  return (
    <div className="flex flex-col gap-y-2">
      {cart_items.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
};
