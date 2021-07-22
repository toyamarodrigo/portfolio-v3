import React, { useState } from "react"
import { Stack, Text, Button } from "@chakra-ui/react"
import { motion } from "framer-motion"

import ProjectsList from "./ProjectsList/ProjectsList"

const MotionButton = motion(Button)

export function Projects({ posts, color }) {
  const [isShowing, setIsShowing] = useState(false)

  const handleShowProject = () => setIsShowing(!isShowing)

  return (
    <Stack
      alignItems="center"
      className="projects"
      id="projects"
      justifyContent="center"
      overflow="hidden"
    >
      <Stack
        alignItems="center"
        className="projects__title"
        color={color}
        justifyContent="center"
        marginBottom={100}
        opacity={0.2}
      >
        <Title>Projects.</Title>
      </Stack>
      <Stack
        alignItems="center"
        className="projects__list"
        justifyContent="center"
        spacing={20}
        w={930}
        zIndex={2}
      >
        <ProjectsList isShowing={isShowing} posts={posts} />
        <MotionButton
          colorScheme="teal"
          data-aos="fade-down"
          paddingX={10}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShowProject}
        >
          {!isShowing ? "Show more" : "Show less"}
        </MotionButton>
      </Stack>
    </Stack>
  )
}

const Title = ({ children }) => {
  return (
    <Text
      as={"h1"}
      data-aos="fade-up"
      data-aos-duration="1000"
      fontSize={{ base: "4rem", sm: "5rem", md: "8rem", lg: "11.642rem" }}
    >
      {children}
    </Text>
  )
}
