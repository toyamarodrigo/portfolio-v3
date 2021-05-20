import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Navbar, About, Contact, Landing, Projects } from '../components';

export default function Home() {
  return (
    <Stack overflowX="hidden">
      <Navbar />
      <Landing />
      <Projects />
    </Stack>
  );
}
