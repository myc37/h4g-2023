import { Stack, Box, Text, Image, Heading, Grid, GridItem, Button, Link } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box h="calc(100vh - 72px)" pb="72px">
      <Grid templateColumns="repeat(2, 1fr)" h="full">
        <GridItem colSpan={{ base: 2, md: 1 }} display="grid" placeItems="center">
          <Box
            display="flex"
            flexDir="column"
            gap={{ base: '16px', md: '12px' }}
            alignItems={{ base: 'center', md: 'start' }}
          >
            <Box as="img" rounded="xl" src="/landing-hero.png" alt="map image" w="75%" display={{ md: 'none' }} />
            <Text textStyle={{ base: 'h3', md: 'h2' }} color="primary.800" textAlign={{ base: 'center', md: 'left' }}>
              Creating more accessible communities one step at a time
            </Text>
            <Box display="flex" gap="8px">
              <Button width="fit-content" colorScheme="primary" variant="outline">
                <Link href="/report">Contribute a report</Link>
              </Button>
              <Button width="fit-content" colorScheme="primary">
                <Link href="/map">View map</Link>
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }} display={{ base: 'none', md: 'grid' }} placeItems="center">
          <Box as="img" rounded="xl" src="/landing-hero.png" alt="map image" w="75%" />
        </GridItem>
      </Grid>
      {/* <Stack flexDir="row" p={4} gap={4} alignContent="baseline">
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
      </Stack> */}
    </Box>
  );
};

export default Hero;
