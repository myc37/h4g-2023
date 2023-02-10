import { Box, BoxProps, chakra } from '@chakra-ui/react';
import { Slide } from 'react-slideshow-image';
import { useImages } from '~/hooks/useImages';

const ImageSlider = chakra(({ imgFullPaths, ...restProps }: { imgFullPaths: string[] } & BoxProps) => {
  const { downloadUrls } = useImages(imgFullPaths);

  if (!imgFullPaths || !imgFullPaths.length || !downloadUrls || !downloadUrls.length) {
    return <></>;
  }

  return (
    <>
      {downloadUrls && downloadUrls.length ? (
        <Box {...restProps}>
          <Slide transitionDuration={250}>
            {downloadUrls.map((url) => (
              <Box as="img" rounded="md" w="full" key={url} src={url} />
            ))}
          </Slide>
        </Box>
      ) : null}
    </>
  );
});

export default ImageSlider;
