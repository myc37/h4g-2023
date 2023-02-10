import { Box, Container } from '@chakra-ui/react';
import { Head } from '~/components/shared/Head';

function Page404() {
  return (
    <Box bg="primary.50" px="24px">
      <Container maxW="1140px">
        <Head title="The page is not found" />
        <div className="hero min-h-screen bg-gray-800">
          <div className="text-center hero-content text-3xl font-bold">
            <div>
              <h1>The page is not found.</h1>
              <div className="mt-4">
                <a href="/" className="link-primary">
                  Top Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Page404;
