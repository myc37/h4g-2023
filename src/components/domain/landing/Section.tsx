import { Grid, GridItem, Box, Text, BoxProps } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type Props = {
  contentSide: 'left' | 'right';
  imgSrc: string;
  heading: string;
  content: ReactElement;
  imgClass?: BoxProps;
};

const Section: FC<Props> = ({ contentSide, imgSrc, heading, content, imgClass }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" h="full" gap={{ base: '16px', md: '40px' }}>
      {contentSide === 'right' ? (
        <GridItem colSpan={{ base: 2, md: 1 }} display={{ base: 'none', md: 'grid' }} placeItems="center">
          <Box as="img" rounded="xl" src={imgSrc} alt="image" {...imgClass} />
        </GridItem>
      ) : null}
      <GridItem colSpan={2} display={{ base: 'grid', md: 'none' }} placeItems="center">
        <Box as="img" rounded="xl" src={imgSrc} alt="image" {...imgClass} />
      </GridItem>

      <GridItem colSpan={{ base: 2, md: 1 }} display="flex" flexDir="column" alignItems="start" justifyContent="center">
        <Box
          display="flex"
          flexDir="column"
          gap={{ base: '16px', md: '12px' }}
          alignItems={{ base: 'center', md: 'start' }}
        >
          <>
            <Text textStyle={{ base: 'h5', md: 'h5' }} color="primary.800">
              {heading}
            </Text>
            {content}
          </>
        </Box>
      </GridItem>

      {contentSide === 'left' ? (
        <GridItem colSpan={{ base: 2, md: 1 }} display={{ base: 'none', md: 'grid' }} placeItems="center">
          <Box as="img" rounded="xl" src={imgSrc} alt="image" {...imgClass} />
        </GridItem>
      ) : null}
    </Grid>
  );
};
export default Section;
