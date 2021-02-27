import { Button, Flex } from '@chakra-ui/react';
import { GithubLogo, GoogleLogo } from '@/icons/icons';
import { useAuth } from '@/lib/auth';

const LoginButtons = () => {
  const auth = useAuth();

  return (
    <Flex direction={['column', 'row']}>
      <Button
        leftIcon={<GithubLogo />}
        onClick={() => auth?.signinWithGithub()}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        mt={4}
        mr={2}
        size="lg"
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Sign In with GitHub
      </Button>
      <Button
        leftIcon={<GoogleLogo />}
        onClick={() => auth?.signInWithGoogle()}
        backgroundColor="white"
        color="gray.900"
        variant="outline"
        fontWeight="medium"
        mt={4}
        mr={2}
        size="lg"
        _hover={{ bg: 'gray.100' }}
        _active={{
          bg: 'gray.100',
          transform: 'scale(0.95)'
        }}
      >
        Sign In with Google
      </Button>
    </Flex>
  );
};

export default LoginButtons;
