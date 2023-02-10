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
          <Stack p="4px">
            <Text textStyle="subhead-2" noOfLines={2}>
              {locationDescription}
            </Text>
            <Slide transitionDuration={250}>
              {downloadUrls && downloadUrls.length
                ? downloadUrls.map((url) => <Box as="img" w="full" key={url} src={url} />)
                : null}
            </Slide>

            <Text noOfLines={4}>{details}</Text>
            <Box display="flex" gap="8px">
              <Button
                onClick={handleClickLike}
                size="xs"
                px="24px"
                leftIcon={liked ? <BxLikeS /> : <BxLike />}
                variant={liked ? 'solid' : 'outline'}
                colorScheme="primary"
              >
                {`${likes + (liked ? 1 : 0)} like${likes !== 1 ? 's' : ''}`}
              </Button>
              <Button size="xs" w="full" colorScheme="secondary">
                <Link href="/" target="_blank">
                  View discussion
                </Link>
              </Button>
            </Box>
          </Stack>
        </InfoWindow>
      ) : (
        <></>
      )}
    </Marker>
  );
};
export default MarkerWithWindow;
