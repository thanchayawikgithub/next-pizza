"use client";
import { useCustomizeDialogStore } from "@/store/customizeDialog";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Size } from "@/types/size";
import { Crust } from "@/types/Crust";

export const CustomizeDialog = () => {
  const { isOpen, onClose, pizza, initialValues } = useCustomizeDialogStore();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<Size>(Size.medium);
  const [crust, setCrust] = useState<Crust>(Crust.original);
  const [totalPrice, setTotalPrice] = useState(0);
  // const totalPrice = useMemo(() => price * quantity, [size, crust, quantity]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const selectSize = (size: Size) => () => {
    setSize(size);
  };

  const selectCrust = (crust: Crust) => () => {
    setCrust(crust);
  };

  const addToCart = () => {
    const cartItem: CartItem = {
      pizza_id: pizza?.id || 0,
      quantity: quantity,
      size: size,
      crust: crust,
      cart_id: 0,
      total_price: totalPrice,
    };
  };

  const prepareForm = () => {
    setQuantity(initialValues.quantity);
    setSize(initialValues.size);
    setCrust(initialValues.crust);
    setTotalPrice(pizza?.price || 0);
  };

  useEffect(() => {
    prepareForm();
  }, [isOpen]);

  if (!pizza) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[1000px] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="font-semibold text-3xl">
            Customize Your Pizza
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 p-5">
          <div className="max-w-[530px] flex flex-col justify-center overflow-hidden">
            <Image
              alt="pizza"
              src={pizza?.image || ""}
              width={500}
              height={500}
              className=""
              style={{ transform: "scale(1.4)" }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col mt-5">
              <h1 className="text-2xl mb-1 font-bold">{pizza?.name}</h1>
              <p className="text-sm text-slate-500">{pizza?.ingrediants}</p>
            </div>
            <h1 className="text-xl font-semibold mt-5">Select Size</h1>
            <div className="flex gap-x-2 mt-3">
              <Button
                variant={size === Size.medium ? "default" : "outline"}
                onClick={selectSize(Size.medium)}
              >
                Medium
              </Button>
              <Button
                variant={size === Size.large ? "default" : "outline"}
                onClick={selectSize(Size.large)}
              >
                Large
              </Button>
            </div>
            <h1 className="text-xl font-semibold mt-5">Select Crust</h1>
            <div className="flex gap-x-2 mt-3">
              <Button
                variant={crust === Crust.original ? "default" : "outline"}
                onClick={selectCrust(Crust.original)}
              >
                Original
              </Button>
              <Button
                variant={crust === Crust.thin ? "default" : "outline"}
                onClick={selectCrust(Crust.thin)}
              >
                Thin & Crispy
              </Button>
            </div>
            <h1 className="text-xl font-semibold mt-5">Quantity</h1>
            <div className="flex gap-x-3 mt-3 items-center">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => decreaseQuantity()}
              >
                <ChevronLeft />
              </Button>
              <h3 className="text-xl font-semibold">{quantity}</h3>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => increaseQuantity()}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="flex items-center">
          <h1 className="text-2xl font-bold mr-5">{totalPrice} ฿</h1>
          <Button onClick={addToCart}>Add to cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
