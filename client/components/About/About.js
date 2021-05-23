import React from 'react';
import {
  Stack,
  Text,
  VStack,
  Box,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';

export function About() {
  return (
    <Stack
      position="relative"
      id="about"
      className="about"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className="about__eclipse"
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'block',
        }}
        position="absolute"
        top="-40%"
        right="30%"
        width="2450px"
        height="2450px"
        borderRadius="50%"
        zIndex={-1}
      />
      <Stack
        justifyContent="center"
        alignItems="center"
        className="about__title"
        marginBottom={100}
      >
        <VStack>
          <Text
            as={'h1'}
            fontSize={{ base: '4rem', sm: '5rem', md: '8rem', lg: '11.642rem' }}
            marginBottom={8}
          >
            About
          </Text>
        </VStack>
        <VStack textAlign="center" w={500}>
          <Text className="about__title__presentation" marginBottom={4}>
            Hi, I'm Rodrigo, a Fullstack Developer based in Argentina.
          </Text>
          <Text className="about__title__presentation">
            Passionate about Software and Web development. I love to learn new
            things as well as solving real-world problems.
          </Text>
        </VStack>
      </Stack>
      <Grid
        position="relative"
        justifyContent="center"
        alignItems="center"
        className="about__goal"
        templateColumns="repeat(12,1fr)"
        gap={4}
      >
        <GridItem colStart={{ lg: 3 }} colEnd={{ lg: 8 }} marginBottom={16}>
          <Stack justifyContent="center" alignItems="center">
            <Image
              src={'/goals-image1.jpg'}
              alt="goal image"
              h={'auto'}
              borderRadius="20px"
            />
          </Stack>

          <Stack
            textAlign="right"
            padding={4}
            marginTop={6}
            className="about__goal__first-text"
          >
            <Text>
              My goal is to provide high-quality work to clients no matter if
              the project is small or of high complexity.
            </Text>
            <Text>
              I entered the world of Software development because I realized
              that I can make an impact on people by just using my imagination
              and passion when building applications.
            </Text>
          </Stack>
        </GridItem>
        <GridItem position="absolute" top={{ lg: '35%' }} colStart={{ lg: 8 }}>
          <Stack>
            <Text
              as={'h1'}
              fontSize={{ lg: '14.552rem' }}
              className="about__goal__title"
            >
              Goal
            </Text>
          </Stack>
        </GridItem>
        <GridItem colStart={{ lg: 3 }} colEnd={{ lg: 10 }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            direction="row"
            spacing={10}
          >
            <Image
              src={'/goals-image2.jpg'}
              alt="goal image"
              h={'auto'}
              borderRadius="20px"
            />
            <Stack className="about__goal__second-text">
              <Text>
                By 2018, I thought it would be a good idea to start
                documenting/blogging my journey of becoming a developer to
                inspire others as well as keep myself accountable. So I started
                my Instagram @rt.codes talking about the progress I was making
                and what concepts I was currently learning.
              </Text>
              <Text>
                I also did a bunch of Personal projects with the knowledge I
                gathered from courses and the Internet. Check them out on the
                button below.
              </Text>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
}
