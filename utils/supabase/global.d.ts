import type { Database } from "./database.types";

declare global {
  type Pizza = Database["public"]["Tables"]["pizzas"]["Row"];
  type Cart = Database["public"]["Tables"]["carts"]["Row"];
  type CartItem = Database["public"]["Tables"]["cart_items"]["Row"];
}
