import type { Database } from "./database.types";

declare global {
  type User = Database["public"]["Tables"]["users"]["Row"];
  type Pizza = Database["public"]["Tables"]["pizzas"]["Row"];
  type Cart = Database["public"]["Tables"]["carts"]["Row"];
  type CartItem = Database["public"]["Tables"]["cart_items"]["Row"];
  type InsertCartItem = Database["public"]["Tables"]["cart_items"]["Insert"];
}
