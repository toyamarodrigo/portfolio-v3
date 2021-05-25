import React, { useRef } from 'react';
import Link from 'next/link';
import {
  useDisclosure,
  HStack,
  Stack,
  Button,
  Icon,
  IconButton,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionStack = motion(Stack);

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const btnMenuRef = useRef();

  const Links = ['Home', 'Projects', 'About', 'Contact'];

  return (
    <>
      <MotionStack
        id="navbar"
        className="navbar"
        position="absolute"
        justifyContent="center"
        alignItems="center"
        px={{ base: 10, sm: 20, lg: 20, xl: 80 }}
        width="100%"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Logo>rt.codes</Logo>
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
                  <IconButton
                    borderRadius="50%"
                    padding={0}
                    onClick={toggleColorMode}
                    icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                  />
                </VStack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MotionStack>
    </>
  );
}

const Logo = ({ children }) => {
  return (
    <HStack>
      <Stack>
        <Link href="/" className="logo">
          {children}
        </Link>
      </Stack>
    </HStack>
  );
};
