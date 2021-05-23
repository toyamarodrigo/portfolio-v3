import React from 'react';
import { Stack, Box, VStack, Text, Button, Link } from '@chakra-ui/react';

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
      <Box
        className="contact__eclipse"
        display={{
          base: 'block',
          sm: 'block',
          md: 'block',
          lg: 'block',
        }}
        position="absolute"
        top={0}
        width="194px"
        height="194px"
        borderRadius="50%"
        zIndex={-1}
      />
      <Stack
        position="relative"
        justifyContent="center"
        alignItems="center"
        className="contact__title"
        marginBottom={100}
      >
        <VStack
          position="absolute"
          bottom={{ base: '50%', sm: '45%', md: '30%', lg: '10%' }}
        >
          <Text
            as={'h1'}
            fontSize={{ base: '4rem', sm: '5rem', md: '8rem', lg: '11.642rem' }}
            marginBottom={8}
          >
            Contact
          </Text>
        </VStack>
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
            to create game-changing experiences.
          </Text>
        </VStack>
        <Stack>
          <Link>
            <Button colorScheme="teal" px={10}>
              Let's Talk
            </Button>
          </Link>
        </Stack>
      </Stack>
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
    </Stack>
  );
}
