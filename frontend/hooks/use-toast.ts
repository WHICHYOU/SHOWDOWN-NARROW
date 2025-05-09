"use client";

import { useToast as useToastContext } from "@/components/ui/use-toast";

export function useToast() {
  const { toast } = useToastContext();

  return {
    toast,
  };
}
