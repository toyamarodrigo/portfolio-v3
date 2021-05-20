import React, { useRef } from 'react';
import Link from 'next/link';
import {
  IconButton,
  useDisclosure,
  HStack,
  Stack,
  Button,
  Icon,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { HamburgerIcon, SunIcon } from '@chakra-ui/icons';

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnMenuRef = useRef();

  const Links = ['Home', 'Projects', 'About', 'Contact'];

  return (
    <>
      <Stack
        id="navbar"
        className="navbar"
        position="absolute"
        justifyContent="center"
        alignItems="center"
        px={{ base: 20, sm: 20, lg: 20, xl: 80 }}
        width="100%"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <HStack>
            <Logo />
          </HStack>
          <Stack alignItems="center">
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}
              className="nav-links"
            >
              {Links.map((link, index) => (
                <Link key={index} href={`#${link.toLowerCase()}`}>
                  {link}
                </Link>
              ))}
              <Button borderRadius="50%" padding={0}>
                <Icon as={SunIcon} />
              </Button>
            </HStack>
          </Stack>
          <IconButton
            size={'md'}
            icon={!isOpen && <HamburgerIcon h={8} w={8} />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            ref={btnMenuRef}
            onClick={onOpen}
            backgroundColor="transparent"
            color="white"
          />
        </Stack>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnMenuRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="white" />
            <DrawerHeader marginLeft={2}>Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing={6} marginLeft={4}>
                <VStack spacing={6} alignItems="flex-start">
                  {Links.map((link) => (
                    <Link key={link} href={`#${link.toLowerCase()}`}>
                      {link}
                    </Link>
                  ))}
                </VStack>
                <VStack alignItems="flex-start">
                  <Button borderRadius="50%" padding={0}>
                    <Icon as={SunIcon} />
                  </Button>
                </VStack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Stack>
    </>
  );
}

const Logo = () => {
  return (
    <Stack>
      <Link href="/" className="logo">
        rt.codes
      </Link>
    </Stack>
  );
};
