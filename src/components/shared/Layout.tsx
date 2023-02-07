import { Box } from '@chakra-ui/react';
import { Link } from '@opengovsg/design-system-react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Box as="nav" p="16px" display="flex" alignItems="center" gap="16px">
        <Link href="/">Home</Link>
        <Link href="/report">Submit Report</Link>
      </Box>
      <Outlet />
    </div>
  );
}
