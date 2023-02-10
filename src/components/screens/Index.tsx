import { Box, Container } from '@chakra-ui/react';
import { Head } from '~/components/shared/Head';

function Index() {
  return (
    <Box bg="primary.50" px="24px">
      <Container maxW="1140px">
        <Head title="TOP PAGE" />
        <div className="hero min-h-screen">
          <div className="text-center hero-content" />
        </div>
      </Container>
    </Box>
  );
}

export default Index;
