import React from 'react';
import { Stack, Box, VStack, Text, Button, Link, Icon } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Socials } from './constants';

export function Contact() {
  return (
    <Stack
      position="relative"
      id="contact"
      className="contact"
      justifyContent="center"
      alignItems="center"
      h={'100vh'}
      overflow="hidden"
    >
      <Stack
        position="relative"
        justifyContent="center"
        alignItems="center"
        className="contact__title"
        marginBottom={50}
      >
        <Title>Contact</Title>
        <VStack className="contact__title__subtitle" w={'100%'}>
          <Text
            fontSize={{
              base: '1.4rem',
              sm: '1.5rem',
              md: '1.6rem',
              lg: '1.953rem',
            }}
          >
            Let's work together
          </Text>
          <Text
            fontSize={{ base: '0.8rem', sm: '0.8rem', md: '1rem', lg: '1rem' }}
          >
            and create game-changing experiences.
          </Text>
        </VStack>
        <ButtonContact className="contact__title__button">Let's Talk</ButtonContact>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        className="contact__socials"
        spacing={20}
      >
        {Socials.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            aria-label={social.ariaLabel}
            rel="noopener noreferrer"
          >
            <Icon
              as={FontAwesomeIcon}
              size="lg"
              icon={
                social.name === 'ig'
                  ? faInstagram
                  : social.name === 'github'
                  ? faGithub
                  : social.name === 'linkedin'
                  ? faLinkedinIn
                  : null
              }
            />
          </Link>
        ))}
      </Stack>
      <EclipseTwo />
    </Stack>
  );
}

const Title = ({ children }) => {
  return (
    <VStack
      position="absolute"
      bottom={{ base: '50%', sm: '45%', md: '30%', lg: '10%' }}
    >
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

const ButtonContact = ({ children }) => {
  return (
    <Stack>
      <Link href="/#form" textDecor="none">
        <Button colorScheme="teal" px={10}>
          {children}
        </Button>
      </Link>
    </Stack>
  );
};

const EclipseTwo = () => {
  return (
    <Box
      className="contact__eclipse2"
      display={{
        base: 'block',
        sm: 'block',
        md: 'block',
        lg: 'block',
      }}
      position="absolute"
      top={'80%'}
      width="2083px"
      height="2083px"
      borderRadius="50%"
      zIndex={-1}
    />
  );
};
