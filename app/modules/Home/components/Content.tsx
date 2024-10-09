"use client";

import { Alert, AlertIcon, Flex, Grid } from "@chakra-ui/react";
import { usePayments } from "@/app/services";
import { Item } from "./Item";

export const Content = () => {
  const { data: payments } = usePayments(false);

  if (!payments || !Array.isArray(payments)) {
    return (
      <Alert status='info'>
        <AlertIcon />
        No payments data available
      </Alert>
    );
  }

  return (
    <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={4}>
      {payments.map((payment) => (
        <Item key={payment.transactionId} {...payment} />
      ))}
    </Grid>
  );
};
