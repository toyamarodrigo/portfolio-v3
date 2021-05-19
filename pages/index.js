import { Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import { Navbar, About, Contact, Landing, Projects } from '../components';

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Projects />
    </>
  );
}
