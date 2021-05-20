import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import ProjectsList from './ProjectsList/ProjectsList';

export function Projects() {
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
      <Stack justifyContent="center" alignItems="center" w={930}>
        <ProjectsList />
      </Stack>
    </Stack>
  );
}
