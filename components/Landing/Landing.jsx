import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Icon,
  Stack,
  Text,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Socials } from './constants';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionStack = motion(Stack);
const MotionList = motion(List);
const MotionListItem = motion(ListItem);

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export function Landing({ color }) {
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <EclipseOne offSetY={offSetY} />
      <Stack
        className="landing__container-text"
        width="356px"
        height="auto"
        justifyContent="center"
      >
        <MotionStack
          className="landing__container-text__titles"
          marginBottom="26px"
          w={'100%'}
          marginX={'20px'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          zIndex={1}
        >
          <Title color={color}>Rodrigo Toyama.</Title>
          <Subtitle color={color}>Full-stack Developer</Subtitle>
        </MotionStack>
        <MotionList
          display="flex"
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          className="landing__container-text__socials"
          w={{ base: '100', md: '100', lg: '100' }}
          color="white"
          initial="hidden"
          animate="show"
          variants={variants}
        >
          {Socials.map((social, index) => (
            <MotionListItem key={index} variants={item}>
              <Link href={social.url}>
                <a
                  target="_blank"
                  className={`landing__container-text__socials__item ${social.name}`}
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
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
            </MotionListItem>
          ))}
        </MotionList>
      </Stack>
      <Logo />
      <EclipseTwo offSetY={offSetY} />
    </Stack>
  );
}

const Logo = () => {
  return (
    <MotionStack
      display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
      justifyContent="center"
      alignItems="center"
      className="landing__container-logo"
      borderRadius="50%"
      height={{ lg: '350px', xl: '420px' }}
      width={{ lg: '350px', xl: '420px' }}
      initial={{ opacity: 0 }}
      animate={{ scale: [0, 1.4, 0.9, 1], opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      zIndex={1}
    >
      <Image src="/logo.png" alt="logo" width="250" height="250" />
    </MotionStack>
  );
};

const Title = ({ children }) => {
  return (
    <Text as={'h1'} fontSize={{ base: '4.2rem', sm: '4.2rem', lg: '4.768rem' }}>
      {children}
    </Text>
  );
};

const Subtitle = ({ children }) => {
  return (
    <Text as={'h4'} fontSize={{ base: '1.4rem', sm: '1.6rem' }}>
      {children}
    </Text>
  );
};

const EclipseOne = ({ offSetY }) => {
  const eclipseOne = useColorModeValue('#85a2eb', '#293552');
  return (
    <MotionBox
      className="landing__eclipse"
      display={{
        base: 'none',
        sm: 'none',
        md: 'none',
        lg: 'block',
      }}
      bg={eclipseOne}
      position="absolute"
      top="-60%"
      left="52%"
      width="2223px"
      height="2223px"
      borderRadius="50%"
      zIndex={0}
      initial={{ opacity: 0 }}
      animate={{ scale: 1, x: [800, 0], y: offSetY * 0.2, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50 }}
    />
  );
};

const EclipseTwo = ({ offSetY }) => {
  const eclipseTwo = useColorModeValue('#6acadb', '#e9fbfe');
  return (
    <MotionBox
      className="landing__eclipse2"
      position="absolute"
      width="194px"
      height="194px"
      top="90%"
      right="92%"
      borderRadius="50%"
      bg={eclipseTwo}
      initial={{ opacity: 0 }}
      animate={{
        scale: [0.7, 1],
        x: [-200, 0],
        y: offSetY * 0.3,
        opacity: 1,
      }}
      transition={{ type: 'spring', stiffness: 10 }}
    />
  );
};
