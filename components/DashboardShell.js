import { Flex, Link, Box, Button, Avatar } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Logo } from '@/icons/icons';
import { useAuth } from '@/lib/auth';

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
          <NextLink href="/" passHref>
            <Logo boxSize="24px" color="black" mr={8} />
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link mr={4}>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" passHref>
            <Link>Feedback</Link>
          </NextLink>
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
        <Flex ml="auto" mr="auto" maxWidth="1000px" w="100%" direction="column">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DashboardShell;
