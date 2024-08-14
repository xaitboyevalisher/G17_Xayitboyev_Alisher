import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FaCreditCard } from "react-icons/fa";
import NewCard from "./NewCard";
import MyCards from "./MyCards";

import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";
import card5 from "./images/card5.png";
import card6 from "./images/card6.png";
import card7 from "./images/card7.png";
import card8 from "./images/card8.png";

interface Card {
  id: number;
  src: string;
  holder: string;
  expiry: string;
}

const TabsSection = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      src: card1,
      holder: "Noman Manzoor",
      expiry: "02/30",
    },
    {
      id: 2,
      src: card2,
      holder: "Noman Manzoor",
      expiry: "02/30",
    },
    {
      id: 3,
      src: card3,
      holder: "Noman Manzoor",
      expiry: "02/30",
    },
    {
      id: 4,
      src: card4,
      holder: "Noman Manzoor",
      expiry: "02/30",
    },
    {
      id: 5,
      src: card5,
      holder: "Noman Manzoor",
      expiry: "02/30",
    },
    {
      id: 6,
      src: card6,
      holder: "Noman Manzoor",
      expiry: "02/30",
    },
    {
      id: 7,
      src: card7,
      holder: "Noman Manzoor",
      expiry: "02/30",
    },
    {
      id: 8,
      src: card8,
      holder: "Noman Manzoor",
      expiry: "02/30",
    },
  ]);

  const addCard = (newCard: Card) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <Tabs variant="soft-rounded" colorScheme="purple" width="100%">
      <TabList>
        <Tab>
          <FaCreditCard style={{ marginRight: "8px" }} />
          New Credit Card
        </Tab>
        <Tab>
          <Stack direction="row" alignItems="center">
            <Icon as={AddIcon} />
            <Text>My Cards</Text>
          </Stack>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <NewCard addCard={addCard} />
        </TabPanel>
        <TabPanel>
          <MyCards cards={cards} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsSection;
