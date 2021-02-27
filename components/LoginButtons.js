import { Button, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const LoginButtons = () => {
  const auth = useAuth();

  return (
    <Flex direction={['column', 'row']}>
      <Button
        onClick={() => auth?.signinWithGithub()}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        mt={4}
        mr={2}
        _hover={{ bg: 'gray.700' }}
        _active={{
          bg: 'gray.800',
          transform: 'scale(0.95)'
        }}
      >
        Continue with GitHub
      </Button>
    </Flex>
  );
};

export default LoginButtons;
