import { FC } from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const SingleReport: FC<Props> = ({}) => {
  const { id } = useParams();

  return <>{id}</>;
};
export default SingleReport;
