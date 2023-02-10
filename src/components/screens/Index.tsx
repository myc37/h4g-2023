import { Box } from '@chakra-ui/react';

function Index() {
  return (
    <Box bg="primary.50" px="24px" pb="40px" display="flex" justifyContent="center">
      <Box w="full" maxW="1140px">
        <div className="hero min-h-screen">
          <div className="text-center hero-content" />
        </div>
      </Box>
    </Box>
  );
}

export default Index;
