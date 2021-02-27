import {
  Flex,
  Link,
  Box,
  Button,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';

import { Logo } from '@/icons/icons';
import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        py={4}
        px={8}
      >
        <Flex>
          <Logo boxSize="24px" color="black" mr={8} />
          <Link mr={4}>Feedback</Link>
          <Link>Sites</Link>
        </Flex>
        <Box display="flex" alignItems="center">
          {auth.user && (
            <Button variant="ghost" mr={2} onClick={() => auth.signout()}>
              Logout
            </Button>
          )}
          <Avatar size="sm" src={auth.user?.photoUrl} />
        </Box>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100vh">
        <Flex ml="auto" mr="auto" maxWidth="800px" w="100%" direction="column">
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justifyContent="space-between">
            <Heading color="black" mb={4}>
              My Sites
            </Heading>
            <AddSiteModal>+ Add Site</AddSiteModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DashboardShell;
