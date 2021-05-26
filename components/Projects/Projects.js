import React, { useState } from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';
import ProjectsList from './ProjectsList/ProjectsList';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

export function Projects({ posts, color }) {
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
        color={color}
        opacity={0.3}
      >
        <Title>Projects.</Title>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        w={930}
        spacing={20}
        className="projects__list"
        zIndex={2}
      >
        <ProjectsList posts={posts} isShowing={isShowing} />
        <MotionButton
          colorScheme="teal"
          paddingX={10}
          onClick={handleShowProject}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-aos="fade-down"
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
