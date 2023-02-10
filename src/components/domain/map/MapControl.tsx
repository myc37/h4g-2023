import { Box, Button, Image } from '@chakra-ui/react';
import { useGoogleMap } from '@react-google-maps/api';
import { useEffect, useRef, FC, SetStateAction, Dispatch } from 'react';

type Props = {
  position: keyof typeof google.maps.ControlPosition;
  setActiveMarkerId: Dispatch<SetStateAction<string | null>>;
};

const MapControl: FC<Props> = ({ position, setActiveMarkerId }) => {
  const map = useGoogleMap();
  const ref = useRef<HTMLDivElement>(null);

  const panToUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition((data) => {
      const {
        coords: { latitude: lat, longitude: lng },
      } = data;
      map?.panTo({ lat, lng });
      setActiveMarkerId(null);
    });
  };

  useEffect(() => {
    if (map && ref && ref.current) {
      map.controls[window.google.maps.ControlPosition[position]].push(ref.current);
    }
  }, [map, ref]);

  return (
    <Box ref={ref}>
      <Button onClick={panToUserLocation} bgColor="white" height="40px" width="40px" marginRight={2.5} marginBottom={5}>
        <Image src="/my-location.png" alt="my-location" />
      </Button>
    </Box>
  );
};

export default MapControl;
