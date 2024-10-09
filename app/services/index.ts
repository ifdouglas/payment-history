"use client";

import { useQuery } from "@tanstack/react-query";
import { Payment } from "@/app/types/Payment";

export const usePayments = (enabled: boolean = true) => {
  return useQuery<Payment[]>({
    queryKey: ["payments"],
    queryFn: () => fetch("/api/payment/history", { method: "GET" }).then((res) => res.json()),
    enabled,
  });
};
