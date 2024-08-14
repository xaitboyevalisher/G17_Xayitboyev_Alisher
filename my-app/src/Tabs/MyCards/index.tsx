import React from "react";
import { Box, Text, Grid, Image } from "@chakra-ui/react";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";
import card7 from "../images/card7.png";
import card8 from "../images/card8.png";

const cardImages: { [key: number]: string } = {
  1: card1,
  2: card2,
  3: card3,
  4: card4,
  5: card5,
  6: card6,
  7: card7,
  8: card8,
};

interface Card {
  id: number;
  src: string;
  holder: string;
  expiry: string;
}

interface MyCardsProps {
  cards: Card[];
}

const MyCards: React.FC<MyCardsProps> = ({ cards }) => {
  return (
    <>
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        My Cards
      </Text>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap="6">
        {cards.map((card) => (
          <Box
            key={card.id}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            overflow="hidden"
          >
            <Image src={card.src || "./images/default-card.png"} alt={`Card ${card.id}`} />
            <Box p="4">
              <Text fontWeight="bold">{card.holder}</Text>
              <Text color="gray.500">Expiry Date: {card.expiry}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default MyCards;
