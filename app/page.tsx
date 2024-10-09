"use client";

import React from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { usePayments } from "./services";
import { Content } from "@/app/modules/Home/components/Content";

export default function Home() {
  const { isLoading } = usePayments();

  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      padding={16}
      gap={4}
    >
      <Text fontWeight='bold' fontSize='4xl'>
        Payments History
      </Text>
      <Flex flexDirection='column' gap={4} padding={8}>
        {isLoading ? <Spinner /> : <Content />}
      </Flex>
    </Flex>
  );
}
