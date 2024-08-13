import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Flex mb="6" alignItems="center" justifyContent="space-between">
      <Text fontSize="xl" fontWeight="bold" color="purple.500">Cosmic</Text>
    </Flex>
  );
}

export default Header;
