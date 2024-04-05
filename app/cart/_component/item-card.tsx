import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface ItemCardProps {
  item: CartItem;
}

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card>
      <CardContent className="flex">
        <div className="max-w-[400px]">sd</div>
        <div className="flex flex-col">
          <h1>{item.name}</h1>
        </div>
      </CardContent>
    </Card>
  );
};
