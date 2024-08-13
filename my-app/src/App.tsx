import React from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import Header from "./Header";
import Tabs from "./Tabs";

const App = () => {
  return (
    <ChakraProvider>
      <Flex
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        bg="#f7f7f8"
      >
        <Box
          bg="white"
          p="6"
          borderRadius="md"
          boxShadow="lg"
          maxW="4xl"
          w="100%"
        >
          <Header />
          <Tabs />
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
