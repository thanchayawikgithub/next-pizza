"use client";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useCustomizeDialogStore } from "@/store/customizeDialog";

interface AddButtonProps {
  pizza: Pizza;
}

export default function AddButton({ pizza }: AddButtonProps) {
  const { onOpen } = useCustomizeDialogStore();
  return (
    <Button
      className="max-w-[150px] font-semibold text-base"
      onClick={() => onOpen(pizza)}
    >
      <Plus size={22} className="mr-1" />
      {pizza.price}
      <span className="font-normal ml-1">฿</span>
    </Button>
  );
}
