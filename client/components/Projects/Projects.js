import { Stack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import ProjectsList from './ProjectsList/ProjectsList';

export function Projects({ posts }) {
  const [isShowing, setIsShowing] = useState(false);

  const handleShowProject = () => setIsShowing(!isShowing);

  return (
    <Stack
      id="projects"
      className="projects"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        className="projects__title"
        marginBottom={100}
      >
        <Text
          as={'h1'}
          fontSize={{ base: '4rem', sm: '5rem', md: '8rem', lg: '11.642rem' }}
        >
          Projects.
        </Text>
      </Stack>
      <Stack justifyContent="center" alignItems="center" w={930} spacing={20}>
        <ProjectsList posts={posts} isShowing={isShowing} />
        <Button colorScheme={'red'} paddingX={10} onClick={handleShowProject}>
          {!isShowing ? 'Show more' : 'Show less'}
        </Button>
      </Stack>
    </Stack>
  );
}
