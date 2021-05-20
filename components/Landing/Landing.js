import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Icon, Stack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Socials } from './constants';

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
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'block',
        }}
        position="absolute"
        top="-60%"
        left="52%"
        width="2223px"
        height="2223px"
        borderRadius="50%"
      />
      <Stack
        className="landing__container-text"
        width="356px"
        height="auto"
        justifyContent="center"
      >
        <Stack
          className="landing__container-text__titles"
          marginBottom="26px"
          w={'100%'}
          marginX={'20px'}
        >
          <Text
            as={'h1'}
            fontSize={{ base: '4.2rem', sm: '4.2rem', lg: '4.768rem' }}
          >
            Rodrigo Toyama.
          </Text>
          <Text as={'h4'} fontSize={{ base: '1.4rem', sm: '1.6rem' }}>
            Front-end Developer
          </Text>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          className="landing__container-text__socials"
          w={{ base: '100', lg: '80' }}
          color="white"
          spacing={10}
        >
          {Socials.map((social, index) => (
            <Link key={index} href={social.url}>
              <a
                target="_blank"
                className={`landing__container-text__socials__item ${social.name}`}
                rel="noopener noreferrer"
              >
                <Icon
                  as={FontAwesomeIcon}
                  icon={
                    social.name === 'file'
                      ? faFileAlt
                      : social.name === 'linkedin'
                      ? faLinkedinIn
                      : social.name === 'github'
                      ? faGithub
                      : social.name === 'mail'
                      ? faEnvelopeSquare
                      : ''
                  }
                  className="svg-icon"
                />
              </a>
            </Link>
          ))}
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
