import { Stack, Button, Link, Text } from '@chakra-ui/react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { Dispatch, FC, SetStateAction } from 'react';
import { Report } from '~/types/reports';

type Props = {
  report: Report;
  activeMarkerId: string | null;
  setActiveMarkerId: Dispatch<SetStateAction<string | null>>;
  map: google.maps.Map | null;
};

const MarkerWithWindow: FC<Props> = ({ report, activeMarkerId, setActiveMarkerId, map }) => {
  const { id, location, details } = report;

  return (
    <Marker
      position={location}
      onClick={() => {
        map?.panTo(location);
        setActiveMarkerId(id);
      }}
    >
      {id === activeMarkerId ? (
        <InfoWindow onCloseClick={() => setActiveMarkerId(null)}>
          <Stack p={1}>
            <Text textStyle="body-2" noOfLines={2}>
              {details}
            </Text>
            <Link href="/" target="_blank">
              <Button size="xs">View</Button>
            </Link>
          </Stack>
        </InfoWindow>
      ) : (
        <></>
      )}
    </Marker>
  );
};
export default MarkerWithWindow;
