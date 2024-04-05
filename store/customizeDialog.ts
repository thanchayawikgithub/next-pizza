import { Crust } from "@/types/crust";
import { Size } from "@/types/size";
import { create } from "zustand";

interface CustomizeDialog {
  isOpen: boolean;
  pizza: Pizza | null;
  initialValues: {
    crust: Crust;
    size: Size;
    quantity: number;
  };
  onOpen: (pizza: Pizza) => void;
  onClose: () => void;
}

const defaultValues = {
  crust: Crust.original,
  size: Size.medium,
  quantity: 1,
};

export const useCustomizeDialogStore = create<CustomizeDialog>((set) => ({
  isOpen: false,
  pizza: null,
  initialValues: defaultValues,
  onOpen: (pizza: Pizza) => {
    set({ pizza: pizza, initialValues: defaultValues, isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false, initialValues: defaultValues });
  },
}));
