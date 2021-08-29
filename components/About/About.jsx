import React, { useState, useEffect } from "react"
import {
  Stack,
  Text,
  VStack,
  Box,
  Image,
  Grid,
  GridItem,
  Button,
  Link,
  useColorModeValue
} from "@chakra-ui/react"
import NextLink from "next/link"
import { motion } from "framer-motion"

const MotionStack = motion(Stack)
const MotionBox = motion(Box)

export function About({ color }) {
  const [offSetY, setOffSetY] = useState(0)
  const handleScroll = () => setOffSetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Stack
      alignItems="center"
      className="about"
      id="about"
      justifyContent="center"
      position="relative"
      zIndex={1}
    >
      <EclipseOne offSetY={offSetY} />
      <Stack
        alignItems="center"
        className="about__title"
        color={color}
        justifyContent="center"
        marginBottom={100}
      >
        <Title>About.</Title>
        <Subtitle />
      </Stack>
      <Grid
        alignItems="center"
        className="about__goal"
        color={color}
        gap={4}
        justifyContent="center"
        position="relative"
        templateColumns="repeat(12,1fr)"
      >
        <FirstGoal />
        <GoalTitle />
        <SecondGoal />
      </Grid>

      <ButtonViewProject>View Projects</ButtonViewProject>

      <EclipseTwo />
    </Stack>
  )
}

const ButtonViewProject = ({ children }) => {
  return (
    <MotionStack
      alignItems="center"
      className="about__button"
      justifyContent="center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <NextLink href="/#projects">
        <Button colorScheme={"teal"} paddingX={10}>
          {children}
        </Button>
      </NextLink>
    </MotionStack>
  )
}

const Title = ({ children }) => {
  return (
    <VStack data-aos="fade-down">
      <Text
        as={"h1"}
        fontSize={{ base: "4rem", sm: "5rem", md: "8rem", lg: "11.642rem" }}
        marginBottom={8}
        opacity={0.2}
      >
        {children}
      </Text>
    </VStack>
  )
}

const Subtitle = () => {
  return (
    <VStack
      data-aos="fade-down"
      textAlign="center"
      w={{ base: "80%", sm: "60%", md: "80&", lg: "80%" }}
    >
      <Text className="about__title__presentation" marginBottom={4}>
        Hi, I'm Rodrigo, a Front-end Developer based in Argentina.
      </Text>
      <Text className="about__title__presentation">
        Passionate about Software and Web development. I love to learn new things as well as solving
        real-world problems.
      </Text>
    </VStack>
  )
}

const GoalTitle = () => {
  return (
    <GridItem
      colStart={{ md: 9, lg: 8 }}
      data-aos="fade-down"
      data-aos-duration="2000"
      display={{ base: "none", md: "block" }}
      position="absolute"
      top={{ md: "30%", lg: "30%" }}
      zIndex={-1}
    >
      <Stack>
        <Text
          as={"h1"}
          className="about__goal__title"
          fontSize={{
            base: "8rem",
            sm: "10rem",
            md: "10rem",
            lg: "14.552rem"
          }}
          opacity={0.3}
        >
          Goal
        </Text>
      </Stack>
    </GridItem>
  )
}

const FirstGoal = () => {
  return (
    <GridItem
      colEnd={{ base: 12, sm: 12, md: 11, lg: 8 }}
      colStart={{ base: 2, sm: 2, md: 3, lg: 3 }}
      marginBottom={16}
    >
      <Stack
        alignItems="center"
        data-aos="fade-right"
        data-aos-duration="2000"
        justifyContent="center"
      >
        <Image alt="goal image" borderRadius="20px" h={"auto"} src={"/goals-image1.jpg"} />
      </Stack>

      <Stack
        className="about__goal__first-text"
        data-aos="fade-right"
        data-aos-duration="2000"
        marginTop={6}
        padding={4}
        textAlign={{ sm: "left", md: "left", lg: "right" }}
      >
        <Text>
          My goal is to provide high-quality work to clients no matter if the project is small or of
          high complexity.
        </Text>
        <Text>
          I entered the world of Software development because I realized that I can make an impact
          on people by just using my imagination and passion when building applications.
        </Text>
      </Stack>
    </GridItem>
  )
}

const SecondGoal = () => {
  return (
    <GridItem
      colEnd={{ base: 12, sm: 12, md: 11, lg: 11 }}
      colStart={{ base: 2, sm: 2, md: 3, lg: 3 }}
    >
      <Stack
        alignItems="center"
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row"
        }}
        justifyContent="center"
        spacing={10}
      >
        <Image
          alt="goal image"
          borderRadius="20px"
          data-aos="fade-right"
          data-aos-duration="2000"
          h={"auto"}
          src={"/goals-image2.jpg"}
        />
        <Stack className="about__goal__second-text" data-aos="fade-left" data-aos-duration="2000">
          <Text>
            By 2018, I thought it would be a good idea to start documenting/blogging my journey of
            becoming a developer to inspire others as well as keep myself accountable. So I started
            my Instagram{" "}
            <Link
              isExternal
              className="about__goal__second-text__link"
              href="https://www.instagram.com/rt.codes/"
            >
              @rt.codes
            </Link>{" "}
            talking about the progress I was making and what concepts I was currently learning.
          </Text>
          <Text>
            I also did a bunch of Personal projects with the knowledge I gathered from courses and
            the Internet. Check them out on the button below.
          </Text>
        </Stack>
      </Stack>
    </GridItem>
  )
}

const EclipseOne = ({ offSetY }) => {
  const eclipseBg = useColorModeValue("#85a2eb", "#1f2b4d")

  return (
    <MotionBox
      animate={{ y: offSetY * 0.15 }}
      bg={eclipseBg}
      borderRadius="50%"
      className="about__eclipse"
      data-aos="fade-down"
      display={{
        base: "none",
        sm: "block",
        md: "block",
        lg: "block"
      }}
      height="2450px"
      position="absolute"
      right="30%"
      top="-40%"
      transition={{ type: "spring", stiffness: 10 }}
      width="2450px"
      zIndex={-1}
    />
  )
}

const EclipseTwo = () => {
  const eclipseBg = useColorModeValue("#ffb87a", "#ffe0c4")

  return (
    <MotionBox
      bg={eclipseBg}
      borderRadius="50%"
      bottom={-30}
      className="about__eclipse2"
      data-aos="fade-down"
      display={{
        base: "block",
        sm: "block",
        md: "block",
        lg: "block"
      }}
      height="194px"
      position="absolute"
      width="194px"
      zIndex={0}
    />
  )
}
