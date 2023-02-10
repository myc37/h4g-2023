import { FC, useState, useCallback, memo, CSSProperties, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import useReportState from '~/components/contexts/ReportContext';
import MarkerWithWindow from './MarkerWithWindow';
import { useSearchParams } from 'react-router-dom';
import MapControl from './MapControl';

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
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const {
    state: { reports },
  } = useReportState();
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

  const onLoad = useCallback(async (map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const onClick = () => {
    setActiveMarkerId(null);
  };

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      reports.forEach((report) => bounds.extend(report.location));
      map.fitBounds(bounds);
    }
  }, [map, reports]);

  useEffect(() => {
    if (id) {
      const selectedReport = reports.find((report) => report.id === id);
      if (selectedReport) {
        setActiveMarkerId(id);
        map?.panTo(selectedReport.location);
      }
    }
  }, [id, reports]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} zoom={12} onLoad={onLoad} onUnmount={onUnmount} onClick={onClick}>
        <MapControl position="RIGHT_BOTTOM" setActiveMarkerId={setActiveMarkerId} />
        <>
          {reports.map((report) => (
            <MarkerWithWindow
              key={report.id}
              report={report}
              activeMarkerId={activeMarkerId}
              setActiveMarkerId={setActiveMarkerId}
              map={map}
            />
          ))}
        </>
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(MapWithMarkers);
