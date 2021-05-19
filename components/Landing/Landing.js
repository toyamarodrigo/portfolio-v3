import React from 'react';
import Image from 'next/image';
import { Box, Stack } from '@chakra-ui/layout';

export function Landing() {
  return (
    <Stack
      position="relative"
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{
        base: 0,
        sm: 0,
        md: 0,
        lg: 150,
      }}
      width="100vw"
      height="100vh"
      id="home"
      className="landing"
    >
      <Box
        className="landing__eclipse"
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'block' }}
        position="absolute"
        top="-60%"
        left="52%"
        width="2223px"
        height="2223px"
        borderRadius="50%"
      />
      <Stack className="landing__container-text" width="356px" height="auto">
        <Stack className="landing__container-text__titles" marginBottom="26px">
          <h1>Rodrigo Toyama.</h1>
          <h4>Front-end Developer</h4>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          className="landing__container-text__socials"
          width="100"
          color="white"
        >
          <h3>CV</h3>
          <h3>LINKEDIN</h3>
          <h3>GITHUB</h3>
          <h3>MAIL</h3>
        </Stack>
      </Stack>
      <Stack
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
        justifyContent="center"
        alignItems="center"
        className="landing__container-logo"
        borderRadius="50%"
        height={{ lg: '350px', xl: '420px' }}
        width={{ lg: '350px', xl: '420px' }}
      >
        <Image src="/logo.png" alt="logo" width="250" height="250" />
      </Stack>
      <Box
        className="landing__eclipse2"
        position="absolute"
        width="194px"
        height="194px"
        top="90%"
        right="92%"
        borderRadius="50%"
      />
    </Stack>
  );
}
