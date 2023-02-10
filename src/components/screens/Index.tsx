import { Box, Link, Text } from '@chakra-ui/react';
import Hero from '../domain/landing/Hero';
import Section from '../domain/landing/Section';

function Index() {
  return (
    <>
      <Box bg="primary.50" px="24px" display="flex" justifyContent="center">
        <Box maxW="1140px" w="full">
          <Hero />
        </Box>
      </Box>
      <Box bg="primary.100" px="24px" py="70px" display="flex" justifyContent="center">
        <Box maxW="1140px" w="full">
          <Text textStyle="h3" color="primary.800" mb="70px">
            How does it work?
          </Text>
          <Box display="flex" flexDir="column" gap="70px" bg="primary.100">
            <Section
              contentSide="left"
              imgSrc="landing-1.png"
              heading="Look out for non-disability friendly problem areas"
              content={
                <Box>
                  <Text textStyle="body-1" color="primary.800">
                    As you walk through your neighbourhood, take the opportunity to put yourselves in the shoes of a
                    person with disability (PWD). How might you struggle navigating your environment?
                  </Text>
                </Box>
              }
            />
            <Section
              contentSide="right"
              imgSrc="landing-2.png"
              heading="Contribute a report"
              content={
                <Box display="flex" flexDir="column" gap="8px">
                  <Text textStyle="body-1" color="primary.800">
                    Snap some pictures of the issue, describe how it not accessible to a PWD, describe the location, and
                    submit the report!
                  </Text>
                  <Text textStyle="caption-2" color="primary.800">
                    *Remember to allow the website to access your location so that we can help you accurately highlight
                    the problem marker on the map!
                  </Text>
                </Box>
              }
            />
            <Section
              contentSide="left"
              imgSrc="landing-3.png"
              heading="Co-create meaningful solutions"
              content={
                <Box display="flex" flexDir="column" gap="8px">
                  <Text textStyle="body-1" color="primary.800">
                    Show your care by discussing with other like-minded innovators on how the problem spot could be
                    improved!
                  </Text>
                  <Text textStyle="body-1" color="primary.800">
                    You don&apos;t need to have a solution to comment - express your concern by sympathizing with others
                    to build an inclusive society.
                  </Text>
                </Box>
              }
            />
          </Box>
        </Box>
      </Box>
      <Box bg="primary.50" px="24px" py="70px" display="flex" justifyContent="center">
        <Box maxW="1140px" w="full">
          <Text textStyle="h3" color="primary.800" mb="70px">
            Meet the team
          </Text>
          <Box display="flex" flexDir="column" gap="70px">
            <Section
              contentSide="left"
              imgSrc="rayner.jpg"
              heading="Rayner"
              imgClass={{ w: '50%' }}
              content={
                <Box display="flex" flexDir="column" gap="16px">
                  <Text textStyle="body-1" color="primary.800">
                    I'm passionate about using technology to make a difference in people's lives. That's why I am
                    thrilled to be working on this project to help the disability community. Our map is a tool to not
                    only mark accessibility issues but also bring people together to find solutions and create positive
                    change.
                  </Text>
                  <Link href="https://www.linkedin.com/in/raynerljm" target="_blank" rel="noreferrer" color="blue.500">
                    LinkedIn
                  </Link>
                </Box>
              }
            />
            <Section
              contentSide="right"
              imgSrc="vijay.jpeg"
              imgClass={{ w: '50%' }}
              heading="Vijay"
              content={
                <Box display="flex" flexDir="column" gap="16px">
                  <Text textStyle="body-1" color="primary.800">
                    Hi, I'm Vijay. Accessibility is an issue that deeply matters to me, and I am honored to be a part of
                    this project. Our map marks accessibility challenges and brings like-minded individuals together to
                    co-create solutions. I am excited to see the impact we can make and work towards a future where
                    everyone can live life to the fullest.
                  </Text>
                  <Link
                    href="https://www.linkedin.com/in/n-vijay-narayanan/"
                    target="_blank"
                    rel="noreferrer"
                    color="blue.500"
                  >
                    LinkedIn
                  </Link>
                </Box>
              }
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Index;
