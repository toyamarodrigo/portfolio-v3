import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';

export function Projects() {
  return (
    <Stack id="projects" className="projects">
      <Stack
        justifyContent="center"
        alignItems="center"
        className="projects__title"
      >
        <Text as={'h1'}>Projects.</Text>
      </Stack>
    </Stack>
  );
}
