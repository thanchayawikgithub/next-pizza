"use client";

import { CustomizeDialog } from "@/components/dialog/customize-dialog";
import { useEffect, useState } from "react";

export const DialogProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CustomizeDialog />
    </>
  );
};
