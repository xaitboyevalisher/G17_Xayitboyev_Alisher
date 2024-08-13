import React from "react";
import { Box, Text, Input, Button, Select, Flex } from "@chakra-ui/react";

const AddNewCard = () => {
  return (
    <Box as="form">
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Add New Card
      </Text>
      <Text mb="4">
        Do more with unlimited blocks, files, automations & integrations.
      </Text>
      <Text mb="2">Who is</Text>
      <Input placeholder="Jane Smith" mb="4" />
      <Text mb="2">Payment Details</Text>
      <Input placeholder="6508 8234 3354 7832" mb="4" />
      <Input placeholder="02/04" mb="4" />
      <Select placeholder="United States" mb="4">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
      </Select>
      <Flex justifyContent="space-between">
        <Button variant="outline" colorScheme="purple">
          Cancel
        </Button>
        <Button colorScheme="purple">Add</Button>
      </Flex>
      <Text mt="4" fontSize="sm" color="gray.500">
        By providing your card information, you allow us to charge your card for
        future payment in accordance with their terms.
      </Text>
    </Box>
  );
};

export default AddNewCard;
