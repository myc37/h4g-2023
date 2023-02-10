import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import SingleReport from '../domain/report/SingleReport';

type Props = {};

const Report: FC<Props> = ({}) => {
  return (
    <Box bg="primary.50" px="24px" minH="100vh">
      <Box maxW="1140px" w="full">
        <SingleReport />
      </Box>
    </Box>
  );
};
export default Report;
