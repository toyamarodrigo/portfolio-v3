import React from 'react';
import Link from 'next/link';
import {
  Box,
  Text,
  Flex,
  IconButton,
  useDisclosure,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = ['Home', 'Projects', 'About', 'Contact'];

  return (
    <>
      <Box
        px={40}
        marginTop={8}
        position={'absolute'}
        justifyContent={'center'}
        w={'100%'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <HStack>
            <Logo />
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </Link>
              ))}
            </HStack>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

const Logo = () => {
  return (
    <Box href="/" as="a">
      <Text className="logo">rt.codes</Text>
    </Box>
  );
};
