import React, { useState } from 'react';
import { Stack, Text, Button, Box } from '@chakra-ui/react';
import ProjectsList from './ProjectsList/ProjectsList';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

export function Projects({ posts }) {
  const [isShowing, setIsShowing] = useState(false);

  const handleShowProject = () => setIsShowing(!isShowing);

  return (
    <Stack
      id="projects"
      className="projects"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        className="projects__title"
        marginBottom={100}
      >
        <Title>Projects.</Title>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        w={930}
        spacing={20}
        className="projects__list"
      >
        <ProjectsList posts={posts} isShowing={isShowing} />
        <MotionButton
          colorScheme={'red'}
          paddingX={10}
          onClick={handleShowProject}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {!isShowing ? 'Show more' : 'Show less'}
        </MotionButton>
      </Stack>
    </Stack>
  );
}

const Title = ({ children }) => {
  return (
    <Text
      as={'h1'}
      fontSize={{ base: '4rem', sm: '5rem', md: '8rem', lg: '11.642rem' }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {children}
    </Text>
  );
};
