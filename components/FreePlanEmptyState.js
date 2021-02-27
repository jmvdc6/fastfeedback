import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

import DashboardShell from './DashboardShell';
const FreePlantEmptyState = () => (
  <DashboardShell>
    <Box width="100%" borderRadius="8px" p={8} backgroundColor="whiteAlpha.900">
      <Heading>Get feedback on your site instantly.</Heading>
      <Text>Start today, then grow with us 🌱</Text>
      <Button variant="solid" size="md">
        Upgrade to Starter
      </Button>
    </Box>
  </DashboardShell>
);
export default FreePlantEmptyState;
