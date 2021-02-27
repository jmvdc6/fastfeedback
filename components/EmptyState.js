import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';
const EmptyState = () => (
  <Flex
    width="100%"
    borderRadius="8px"
    p={16}
    backgroundColor="whiteAlpha.900"
    justify="center"
    align="center"
    direction="column"
  >
    <Heading size="lg" mb={2}>
      You haven't added any sites
    </Heading>
    <Text mb={4}>Welcome 👋🏻 Let's get started.</Text>
    <AddSiteModal>Add your first site</AddSiteModal>
  </Flex>
);
export default EmptyState;
