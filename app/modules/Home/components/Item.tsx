"use client";

import dayjs from "dayjs";
import { Card, CardBody, Text } from "@chakra-ui/react";
import { Payment } from "@/app/types/Payment";
import { formatUSCurrency } from "@/app/utils/formatters";

export const Item = ({ transactionId, date, description, amount }: Payment) => {
  return (
    <Card bg='gray.200'>
      <CardBody>
        <Text fontSize='sm'>{transactionId}</Text>
        <Text fontSize='xl'>{description}</Text>
        <Text fontWeight='bold'>{formatUSCurrency(amount)}</Text>
        <Text fontSize='sm'>{dayjs(date).format("MM-DD-YYYY")}</Text>
      </CardBody>
    </Card>
  );
};
