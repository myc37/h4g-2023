import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import useReportState from '../contexts/ReportContext';
import SingleReport from '../domain/report/SingleReport';
import Loading from '../shared/Loading';

type Props = {};

const Report: FC<Props> = ({}) => {
  const { id } = useParams();
  const { getReportById, isLoading } = useReportState();
  const report = getReportById(id);

  if (isLoading) {
    return <Loading />;
  } else if (!report) {
    return <Box>No such report found</Box>;
  }

  return (
    <Box bg="primary.50" px="24px" minH="100vh">
      <Box maxW="1140px" w="full">
        <SingleReport report={report} />
      </Box>
    </Box>
  );
};
export default Report;
