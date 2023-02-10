import { Stack, Box, Text, Image, Heading } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box px={2} py={8}>
      <Heading textAlign="center" fontSize="xl" color="primary.600">
        Creating more accessible communities one step at a time
      </Heading>
      <Stack flexDir="row" p={4} gap={4} alignContent="baseline">
        <Stack alignItems="center">
          <Image src="/low-mobility.png" alt="mobility issues" mb={2} height="60px" width="60px" />
          <Text textAlign="center">Mobility Issues</Text>
        </Stack>
        <Stack alignItems="center">
          <Image src="/low-vision.png" alt="visual impairement" mb={2} height="60px" width="60px" />
          <Text textAlign="center">Visual Impairement</Text>
        </Stack>
        <Stack alignItems="center">
          <Image src="/low-hearing.png" alt="auditory issues" mb={2} height="60px" width="60px" />
          <Text textAlign="center">Auditory Issues</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
