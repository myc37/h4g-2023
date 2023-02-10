import { Box, Link } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Box as="nav" p="16px" display="flex" alignItems="center" gap="16px">
        <Link href="/">Home</Link>
        <Link href="/report">Submit Report</Link>
        <Link href="/map">Map</Link>
      </Box>
      <Outlet />
    </div>
  );
}
