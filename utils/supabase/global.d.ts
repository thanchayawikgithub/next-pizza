import type { Database } from "./database.types";

declare global {
  type Pizza = Database["public"]["Tables"]["pizzas"]["Row"];
}
