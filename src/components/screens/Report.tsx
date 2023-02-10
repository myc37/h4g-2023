import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import SubmitReport from '../domain/report/SubmitReport';

type Props = {};

const Report: FC<Props> = ({}) => {
  return (
    <Box bg="primary.50" px="24px" minH="100vh" pb="40px">
      <Box maxW="1140px" w="full">
        <SubmitReport />
      </Box>
    </Box>
  );
};
export default Report;
