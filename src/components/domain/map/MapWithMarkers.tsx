import { FC, useState, useCallback, memo, CSSProperties } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { MarkerMetadata } from '~/types/markers';
import { fetchMarkers } from '~/api/markers';
import { Heading, Stack, Button, Link } from '@chakra-ui/react';

type Props = {};

const containerStyle: CSSProperties = {
  width: '100%',
  height: 'calc(100vh - 56px)',
};

const center: google.maps.LatLngLiteral = {
  lat: 1.3521,
  lng: 103.8198,
};

const MapWithMarkers: FC<Props> = ({}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<MarkerMetadata[]>([]);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

  const onLoad = useCallback(async (map: google.maps.Map) => {
    const markersFromDb = await fetchMarkers();
    setMarkers(markersFromDb);

    const bounds = new window.google.maps.LatLngBounds(center);
    markersFromDb.forEach((marker) => bounds.extend(marker.location));
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onClick = () => {
    setActiveMarkerId(null);
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onClick}
      >
        <>
          {markers.map(({ id, location, title }) => (
            <Marker
              key={id}
              position={location}
              onClick={() => {
                map?.panTo(location);
                setActiveMarkerId(id);
              }}
            >
              {id === activeMarkerId ? (
                <InfoWindow onCloseClick={() => setActiveMarkerId(null)}>
                  <Stack p={1}>
                    <Heading fontSize="sm">{title}</Heading>
                    <Link href="/" target="_blank">
                      <Button size="xs">View</Button>
                    </Link>
                  </Stack>
                </InfoWindow>
              ) : (
                <></>
              )}
            </Marker>
          ))}
        </>
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(MapWithMarkers);
