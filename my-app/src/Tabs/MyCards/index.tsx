import React from "react";
import { Box, Text, Grid, Image } from "@chakra-ui/react";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";
import card5 from "./images/card5.png";
import card6 from "./images/card6.png";
import card7 from "./images/card7.png";
import card8 from "./images/card8.png";

const cards = [
  {
    id: 1,
    src: "my-app/src/Tabs/MyCards/images/card1.png",
    holder: "Noman Manzoor",
    expiry: "02/30",
  },
  {
    id: 2,
    src: "my-app/src/Tabs/MyCards/images/card2.png",
    holder: "Noman Manzoor",
    expiry: "02/30",
  },
  {
    id: 3,
    src: "my-app/src/Tabs/MyCards/images/card3.png",
    holder: "Noman Manzoor",
    expiry: "02/30",
  },
  {
    id: 4,
    src: "my-app/src/Tabs/MyCards/images/card4.png",
    holder: "Noman Manzoor",
    expiry: "02/30",
  },
  {
    id: 5,
    src: "my-app/src/Tabs/MyCards/images/card5.png",
    holder: "Noman Manzoor",
    expiry: "02/30",
  },
  {
    id: 6,
    src: "my-app/src/Tabs/MyCards/images/card6.png",
    holder: "Noman Manzoor",
    expiry: "02/30",
  },
  {
    id: 7,
    src: "my-app/src/Tabs/MyCards/images/card7.png",
    holder: "Noman Manzoor",
    expiry: "02/30",
  },
  {
    id: 8,
    src: "my-app/src/Tabs/MyCards/images/card8.png",
    holder: "Noman Manzoor",
    expiry: "02/30",
  },
];

const MyCards = () => {
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
            <Image src={card.src} alt={`Card ${card.id}`} />
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
