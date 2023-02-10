import { Box, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <Box
      bg="primary.200"
      w="full"
      display="flex"
      gap="24px"
      alignItems="center"
      color="primary.800"
      textStyle="caption-1"
      px="24px"
      py={{ base: '16px', md: '36px' }}
    >
      <Text>©2023 MapAble</Text>
      <Text ml="auto">
        <Link href="https://github.com/raynerljm/h4g-2023" target="_blank" rel="noreferrer">
          GitHub
        </Link>
      </Text>
      <Text>All rights reserved</Text>
    </Box>
  );
};
export default Footer;
