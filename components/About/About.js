import React from 'react';
import {
  Stack,
  Text,
  VStack,
  Box,
  Image,
  Grid,
  GridItem,
  Button,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export function About() {
  return (
    <Stack
      position="relative"
      id="about"
      className="about"
      justifyContent="center"
      alignItems="center"
    >
      <EclipseOne />
      <Stack
        justifyContent="center"
        alignItems="center"
        className="about__title"
        marginBottom={100}
      >
        <Title>About</Title>
        <Subtitle />
      </Stack>
      <Grid
        position="relative"
        justifyContent="center"
        alignItems="center"
        className="about__goal"
        templateColumns="repeat(12,1fr)"
        gap={4}
      >
        <FirstGoal />
        <GoalTitle />
        <SecondGoal />
      </Grid>

      <ButtonViewProject>View Projects</ButtonViewProject>

      <EclipseTwo />
    </Stack>
  );
}

const ButtonViewProject = ({ children }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="about__button"
    >
      <NextLink href="/#projects">
        <Button colorScheme={'teal'} paddingX={10}>
          {children}
        </Button>
      </NextLink>
    </Stack>
  );
};

const Title = ({ children }) => {
  return (
    <VStack>
      <Text
        as={'h1'}
        fontSize={{ base: '4rem', sm: '5rem', md: '8rem', lg: '11.642rem' }}
        marginBottom={8}
      >
        {children}
      </Text>
    </VStack>
  );
};

const Subtitle = () => {
  return (
    <VStack
      textAlign="center"
      w={{ base: '80%', sm: '60%', md: '80&', lg: '80%' }}
    >
      <Text className="about__title__presentation" marginBottom={4}>
        Hi, I'm Rodrigo, a Fullstack Developer based in Argentina.
      </Text>
      <Text className="about__title__presentation">
        Passionate about Software and Web development. I love to learn new
        things as well as solving real-world problems.
      </Text>
    </VStack>
  );
};

const GoalTitle = () => {
  return (
    <GridItem
      position="absolute"
      top={{ md: '30%', lg: '30%' }}
      display={{ base: 'none', md: 'block' }}
      colStart={{ md: 9, lg: 8 }}
      zIndex={-1}
    >
      <Stack>
        <Text
          as={'h1'}
          fontSize={{
            base: '8rem',
            sm: '10rem',
            md: '10rem',
            lg: '14.552rem',
          }}
          className="about__goal__title"
        >
          Goal
        </Text>
      </Stack>
    </GridItem>
  );
};

const FirstGoal = () => {
  return (
    <GridItem
      colStart={{ base: 2, sm: 2, md: 3, lg: 3 }}
      colEnd={{ base: 12, sm: 12, md: 11, lg: 8 }}
      marginBottom={16}
    >
      <Stack justifyContent="center" alignItems="center">
        <Image
          src={'/goals-image1.jpg'}
          alt="goal image"
          h={'auto'}
          borderRadius="20px"
        />
      </Stack>

      <Stack
        textAlign={{ sm: 'left', md: 'left', lg: 'right' }}
        padding={4}
        marginTop={6}
        className="about__goal__first-text"
      >
        <Text>
          My goal is to provide high-quality work to clients no matter if the
          project is small or of high complexity.
        </Text>
        <Text>
          I entered the world of Software development because I realized that I
          can make an impact on people by just using my imagination and passion
          when building applications.
        </Text>
      </Stack>
    </GridItem>
  );
};

const SecondGoal = () => {
  return (
    <GridItem
      colStart={{ base: 2, sm: 2, md: 3, lg: 3 }}
      colEnd={{ base: 12, sm: 12, md: 11, lg: 11 }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        direction={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
        }}
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
            documenting/blogging my journey of becoming a developer to inspire
            others as well as keep myself accountable. So I started my Instagram{' '}
            <Link
              href="https://www.instagram.com/rt.codes/"
              isExternal
              className="about__goal__second-text__link"
            >
              @rt.codes
            </Link>{' '}
            talking about the progress I was making and what concepts I was
            currently learning.
          </Text>
          <Text>
            I also did a bunch of Personal projects with the knowledge I
            gathered from courses and the Internet. Check them out on the button
            below.
          </Text>
        </Stack>
      </Stack>
    </GridItem>
  );
};

const EclipseOne = () => {
  return (
    <Box
      className="about__eclipse"
      display={{
        base: 'none',
        sm: 'block',
        md: 'block',
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
  );
};

const EclipseTwo = () => {
  return (
    <Box
      className="about__eclipse2"
      display={{
        base: 'block',
        sm: 'block',
        md: 'block',
        lg: 'block',
      }}
      position="absolute"
      bottom={-30}
      width="194px"
      height="194px"
      borderRadius="50%"
      zIndex={-1}
    />
  );
};