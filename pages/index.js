import Head from 'next/head';
import { Button, Box, Flex, Text, Link } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import { Logo } from '@/icons/icons';
import LoginButtons from '@/components/LoginButtons';

export default function Home() {
  const auth = useAuth();
  return (
    <Box bg="gray.100">
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
        maxW="500px"
        margin="0 auto"
      >
        <Head>
          <title>Fast Feedback</title>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(document.cookie && document.cookie.includes('fast-feedback-auth')){
              window.location.href = "/dashboard"
            }`
            }}
          />
        </Head>
        <Logo boxSize="42px" />
        <Text mb={4} fontSize="lg" p={6}>
          <Text as="span" fontWeight="bold">
            Fast Feedback
          </Text>
          {' is being built as part of '}
          <Link
            href="https://react2025.com"
            isExternal
            textDecoration="underline"
          >
            React 2025
          </Link>
          {`. It's the easiest way to add comments or reviews to your static stie. it's still a work-in-progress, but you can try it out by logging in.`}
        </Text>
        {auth.user ? (
          <Button
            as="a"
            href="/dashboard"
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            fontWeight="bold"
            mt={4}
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            View Dashboard
          </Button>
        ) : (
          <LoginButtons />
        )}
      </Flex>
    </Box>
  );
}
