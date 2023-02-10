import { Box, Spinner, Text } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box
      h="fill-available"
      bg="primary.50"
      minH="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap="12px"
    >
      <Text textStyle="h5" color="primary.700">
        Loading...
      </Text>
      <Spinner color="primary.700" />
    </Box>
  );
};

export default Loading;
