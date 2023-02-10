import { Box } from '@chakra-ui/react';
import Hero from '../domain/landing/Hero';

function Index() {
  return (
    <Box bg="primary.50" px="24px" minH="100vh" pb="40px" display="flex" justifyContent="center">
      <Box maxW="1140px" w="full">
        <Hero />
      </Box>
    </Box>
  );
}

export default Index;
