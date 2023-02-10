import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { seedReports } from '~/lib/seed';

type Props = {};

const Seed: FC<Props> = ({}) => {
  return (
    <>
      <Button onClick={seedReports}>Seed</Button>
    </>
  );
};
export default Seed;
