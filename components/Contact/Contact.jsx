import React from "react";
import {
  Stack,
  Box,
  VStack,
  Text,
  Button,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

import { Socials } from "./constants";

const MotionLink = motion(Link);

export function Contact({ color }) {
  return (
    <Stack
      alignItems="center"
      className="contact"
      h={"100vh"}
      id="contact"
      justifyContent="center"
      overflow="hidden"
      position="relative"
    >
      <Stack
        alignItems="center"
        className="contact__title"
        color={color}
        justifyContent="center"
        marginBottom={50}
        position="relative"
      >
        <Title>Contact</Title>
        <VStack className="contact__title__subtitle" w={"100%"}>
          <Text
            data-aos="fade-down"
            data-aos-duration="2000"
            fontSize={{
              base: "1.4rem",
              sm: "1.5rem",
              md: "1.6rem",
              lg: "1.953rem",
            }}
          >
            Let's work together
          </Text>
          <Text
            data-aos="fade-down"
            data-aos-duration="2000"
            fontSize={{ base: "0.8rem", sm: "0.8rem", md: "1rem", lg: "1rem" }}
          >
            and create game-changing experiences.
          </Text>
        </VStack>
        <ButtonContact className="contact__title__button">
          Let's Talk
        </ButtonContact>
      </Stack>
      <Stack
        className="contact__socials"
        data-aos="fade-down"
        direction="row"
        justifyContent="center"
        spacing={20}
      >
        {Socials.map((social, index) => (
          <MotionLink
            key={index}
            aria-label={social.ariaLabel}
            href={social.url}
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon
              as={FontAwesomeIcon}
              icon={
                social.name === "ig"
                  ? faInstagram
                  : social.name === "github"
                  ? faGithub
                  : social.name === "linkedin"
                  ? faLinkedinIn
                  : null
              }
              size="lg"
            />
          </MotionLink>
        ))}
      </Stack>
      <EclipseTwo />
    </Stack>
  );
}

const Title = ({ children }) => {
  return (
    <VStack
      bottom={{ base: "50%", sm: "45%", md: "30%", lg: "10%" }}
      opacity={0.2}
      position="absolute"
    >
      <Text
        as={"h1"}
        data-aos="fade-down"
        data-aos-duration="2000"
        fontSize={{ base: "4rem", sm: "5rem", md: "8rem", lg: "11.642rem" }}
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
      <MotionLink
        data-aos="fade-down"
        href="mailto:toyama.rodrigo@gmail.com"
        textDecor="none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button colorScheme="teal" px={10}>
          {children}
        </Button>
      </MotionLink>
    </Stack>
  );
};

const EclipseTwo = () => {
  const eclipseBg = useColorModeValue("#ffb87a", "#ffe0c4");

  return (
    <Box
      bg={eclipseBg}
      borderRadius="50%"
      className="contact__eclipse2"
      data-aos="fade-up"
      data-aos-duration="2000"
      display={{
        base: "block",
        sm: "block",
        md: "block",
        lg: "block",
      }}
      height="2083px"
      position="absolute"
      top={"80%"}
      width="2083px"
      zIndex={1}
    />
  );
};
