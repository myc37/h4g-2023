import { Box, Container } from '@chakra-ui/react';
import { FC } from 'react';
import SubmitReport from '../domain/report/SubmitReport';

type Props = {};

const Report: FC<Props> = ({}) => {
  return (
    <Box bg="primary.50" px="24px" minH="100vh">
      <Container maxW="1140px">
        <SubmitReport />
      </Container>
    </Box>
  );
};
export default Report;
