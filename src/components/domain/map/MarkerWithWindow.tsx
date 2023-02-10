import { Stack, Button, Link, Text, Box } from '@chakra-ui/react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useImages } from '~/hooks/useImages';
import { Report } from '~/types/reports';
import { Slide } from 'react-slideshow-image';
import BxLike from '~/components/icons/BxLike';
import BxLikeS from '~/components/icons/BxLikeS';
import { likeReport, unlikeReport } from '~/api/reports';

type Props = {
  report: Report;
  activeMarkerId: string | null;
  setActiveMarkerId: Dispatch<SetStateAction<string | null>>;
  map: google.maps.Map | null;
};

const MarkerWithWindow: FC<Props> = ({ report, activeMarkerId, setActiveMarkerId, map }) => {
  const { id, location, details, locationDescription, imgFullPaths, likes } = report;
  const { downloadUrls } = useImages(imgFullPaths);
  const [liked, setLiked] = useState(false);
  const handleClickLike = async () => {
    if (!liked) {
      setLiked(true);
      await likeReport(id);
    } else {
      setLiked(false);
      await unlikeReport(id);
    }
  };

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
          <Box display="flex" flexDir="column" p="4px" maxW="400px">
            <Text textStyle="subhead-2" noOfLines={2} mb="12px">
              {locationDescription}
            </Text>
            {downloadUrls && downloadUrls.length ? (
              <Box mb="12px">
                <Slide transitionDuration={250}>
                  {downloadUrls.map((url) => (
                    <Box as="img" rounded="md" w="full" key={url} src={url} />
                  ))}
                </Slide>
              </Box>
            ) : null}
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
                {`${likes + (liked ? 1 : 0)} like${likes !== 1 ? 's' : ''}`}
              </Button>
              <Button size={{ base: 'xs', md: 'sm' }} flex="1 0 fit-content" colorScheme="secondary">
                <Link href={`report/${id}`} target="_blank" rel="noreferrer">
                  View discussion
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
