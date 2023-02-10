import { Button, Link, Text, Box } from '@chakra-ui/react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { Dispatch, FC, SetStateAction } from 'react';
import { Report, ReportType, reportTypes } from '~/types/reports';
import BxLike from '~/components/icons/BxLike';
import BxLikeS from '~/components/icons/BxLikeS';
import { likeReport, unlikeReport } from '~/api/reports';
import ImageSlider from '~/components/shared/ImageSlider';
import { useLocalStorageLikes } from '~/hooks/useLocalStorageLikes';

type Props = {
  report: Report;
  activeMarkerId: string | null;
  setActiveMarkerId: Dispatch<SetStateAction<string | null>>;
  map: google.maps.Map | null;
};

const MarkerWithWindow: FC<Props> = ({ report, activeMarkerId, setActiveMarkerId, map }) => {
  const { id, location, details, locationDescription, imgFullPaths, likes, type } = report;
  const { localLikes, liked, locallyLike, locallyUnlike } = useLocalStorageLikes(id, likes);

  const handleClickLike = async () => {
    if (!liked) {
      locallyLike();
      await likeReport(id);
    } else {
      locallyUnlike();
      await unlikeReport(id);
    }
  };

  const getIconUrl = (type: ReportType) => {
    switch (type) {
      case reportTypes[0]:
        return '/low-mobility.png';
      case reportTypes[1]:
        return '/low-vision.png';
      case reportTypes[2]:
        return '/low-hearing.png';
    }

    return '/low-mobility.png';
  };

  return (
    <Marker
      position={location}
      onClick={() => {
        map?.panTo(location);
        // pan up by half of (height of marker + height of info window) to center info window
        map?.panBy(0, -120);
        setActiveMarkerId(id);
      }}
      icon={{ url: getIconUrl(type), scaledSize: new google.maps.Size(40, 40), anchor: new google.maps.Point(20, 40) }}
    >
      {id === activeMarkerId ? (
        <InfoWindow onCloseClick={() => setActiveMarkerId(null)}>
          <Box display="flex" flexDir="column" maxW="200px">
            <Text textStyle="subhead-2" noOfLines={2} mb="12px">
              {locationDescription}
            </Text>
            <ImageSlider imgFullPaths={imgFullPaths} mb="12px" />
            <Text noOfLines={4} mb="12px">
              {details}
            </Text>
            <Box display="flex" gap={{ base: '8px', md: '12px' }}>
              <Button
                onClick={handleClickLike}
                size={{ base: 'xs', md: 'sm' }}
                flex="0 0 fit-content"
                leftIcon={liked ? <BxLikeS /> : <BxLike />}
                variant={liked ? 'solid' : 'outline'}
                colorScheme="primary"
              >
                {`${localLikes} like${localLikes !== 1 ? 's' : ''}`}
              </Button>
              <Button size={{ base: 'xs', md: 'sm' }} flex="1 0 fit-content" colorScheme="secondary">
                <Link href={`report/${id}`} target="_blank" rel="noreferrer">
                  Discuss
                </Link>
              </Button>
            </Box>
          </Box>
        </InfoWindow>
      ) : (
        <></>
      )}
    </Marker>
  );
};
export default MarkerWithWindow;
