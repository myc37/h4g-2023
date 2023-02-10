import { Box, Button, Link } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {};

const Navbar: FC<Props> = ({}) => {
  return (
    <Box as="nav" p="12px" display="flex" alignItems="center" gap="24px" bg="primary.50">
      <Link href="/">
        <Box as="img" src="mapable-logo.png" h="24px" />
      </Link>
      <Button ml="auto" colorScheme="primary" variant="outline">
        <Link href="/report">Report</Link>
      </Button>
      <Button colorScheme="primary">
        <Link href="/map">Map</Link>
      </Button>
    </Box>
  );
};
export default Navbar;
