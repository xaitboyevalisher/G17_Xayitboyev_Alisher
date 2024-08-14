import React, { useState } from "react";
import { Box, Text, Input, Button, Select, Flex } from "@chakra-ui/react";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";
import card7 from "../images/card7.png";
import card8 from "../images/card8.png";

const cardImages = [card1, card2, card3, card4, card5, card6, card7, card8];

const getRandomCardImage = () => {
  const randomIndex = Math.floor(Math.random() * cardImages.length);
  return cardImages[randomIndex];
};

interface NewCardProps {
  addCard: (newCard: {
    id: number;
    src: string;
    holder: string;
    expiry: string;
  }) => void;
}

const NewCard: React.FC<NewCardProps> = ({ addCard }) => {
  const [holder, setHolder] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [country, setCountry] = useState("us");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCard = {
      id: Date.now(),
      src: getRandomCardImage(),
      holder,
      expiry,
    };
    addCard(newCard);
    setHolder("");
    setNumber("");
    setExpiry("");
    setCountry("us");
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Add New Card
      </Text>
      <Text mb="4">
        Do more with unlimited blocks, files, automations & integrations.
      </Text>
      <Text mb="2">Card Holder</Text>
      <Input
        value={holder}
        onChange={(e) => setHolder(e.target.value)}
        placeholder="Jane Smith"
        mb="4"
      />
      <Text mb="2">Payment Details</Text>
      <Input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="6508 8234 3354 7832"
        mb="4"
      />
      <Input
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        placeholder="02/04"
        mb="4"
      />
      <Select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="United States"
        mb="4"
      >
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
      </Select>
      <Flex justifyContent="space-between">
        <Button variant="outline" colorScheme="purple">
          Cancel
        </Button>
        <Button colorScheme="purple" type="submit">
          Add
        </Button>
      </Flex>
      <Text mt="4" fontSize="sm" color="gray.500">
        By providing your card information, you allow us to charge your card for
        future payment in accordance with their terms.
      </Text>
    </Box>
  );
};

export default NewCard;
