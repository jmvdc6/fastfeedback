import Head from 'next/head';
import { Button, Flex } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';
import { Logo } from '@/icons/icons';
import LoginButtons from '@/components/LoginButtons';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
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
      <Logo boxSize="64px" />
      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt={4}
          maxW="200px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : (
        <LoginButtons />
      )}
    </Flex>
  );
}
