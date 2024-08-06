import React, { useRef } from "react";
import Link from "next/link";
import {
  useDisclosure,
  HStack,
  Stack,
  IconButton,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionStack = motion(Stack);

export function Navbar({ color }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnMenuRef = useRef();

  const Links = ["Home", "Projects", "About", "Contact"];

  return (
    <>
      <MotionStack
        alignItems="center"
        animate={{ opacity: 1 }}
        className="navbar"
        id="navbar"
        initial={{ opacity: 0 }}
        justifyContent="center"
        position="absolute"
        px={{ base: 10, sm: 20, lg: 20, xl: 80 }}
        transition={{ duration: 1 }}
        width="100%"
      >
        <Stack
          alignItems="center"
          color={color}
          direction="row"
          justifyContent="space-between"
          w="100%"
        >
          <Logo>rt.codes</Logo>
          <Stack alignItems="center">
            <HStack
              as={"nav"}
              className="nav-links"
              display={{ base: "none", md: "flex" }}
              spacing={10}
            >
              {Links.map((link) => (
                <Link key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </Link>
              ))}
              <IconButton
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                isRound="true"
                padding={0}
                onClick={toggleColorMode}
              />
            </HStack>
          </Stack>
          <IconButton
            ref={btnMenuRef}
            aria-label={"Open Menu"}
            backgroundColor="transparent"
            display={{ md: "none" }}
            icon={!isOpen && <HamburgerIcon h={8} w={8} />}
            size={"md"}
            onClick={onOpen}
          />
        </Stack>
        <Drawer
          finalFocusRef={btnMenuRef}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color="white" />
            <DrawerHeader color="white" marginBottom={6} marginLeft={2}>
              Menu
            </DrawerHeader>
            <DrawerBody>
              <Stack marginLeft={4} spacing={6}>
                <VStack alignItems="flex-start" color="white" spacing={6}>
                  {Links.map((link) => (
                    <Link key={link} href={`#${link.toLowerCase()}`}>
                      {link}
                    </Link>
                  ))}
                </VStack>
                <VStack alignItems="flex-start">
                  <IconButton
                    icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                    isRound="true"
                    padding={0}
                    onClick={toggleColorMode}
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
        <Link className="logo" href="/">
          {children}
        </Link>
      </Stack>
    </HStack>
  );
};
