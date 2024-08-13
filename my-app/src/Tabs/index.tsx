import React from "react";
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

const TabsSection: React.FC = () => {
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
          <NewCard />
        </TabPanel>
        <TabPanel>
          <MyCards />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsSection;
