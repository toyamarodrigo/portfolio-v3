import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import {
  Stack,
  Image,
  Text,
  Badge,
  VStack,
  Icon,
  Button,
  Link,
  Collapse,
  Spinner,
  Select,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Search2Icon } from "@chakra-ui/icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ImageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";

const MotionStack = motion(Stack);

export default function ProjectsList({ posts, isShowing }) {
  const [mappedPosts, setMappedPosts] = useState([]);
  const [filter, setFilter] = useState("recent");

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = ImageUrlBuilder({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_PROJECT_DATASET,
      });

      setMappedPosts(
        posts.map((post) => {
          return {
            ...post,
            _createdAt: new Date(post._createdAt),
            mainImage: imgBuilder.image(post.mainImage),
          };
        })
      );
    }
  }, [posts]);

  const handleChangeFilter = (e) => setFilter(e.target.value);

  const postFilteredRecent = () => {
    if (!isShowing) {
      return mappedPosts
        .sort((a, b) => b._createdAt - a._createdAt)
        .slice(0, 3)
        .map((post, index) => (
          <ProjectItem key={post.title} index={index} post={post}>
            <ProjectBody post={post} />
          </ProjectItem>
        ));
    }

    return mappedPosts
      .sort((a, b) => b._createdAt - a._createdAt)
      .map((post, index) => (
        <ProjectItem key={post.title} index={index} post={post}>
          <ProjectBody post={post} />
        </ProjectItem>
      ));
  };

  const postFilteredOldest = () => {
    if (!isShowing) {
      return mappedPosts
        .sort((a, b) => a._createdAt - b._createdAt)
        .slice(0, 3)
        .map((post, index) => (
          <ProjectItem key={post.title} index={index} post={post}>
            <ProjectBody post={post} />
          </ProjectItem>
        ));
    }

    return mappedPosts
      .sort((a, b) => a._createdAt - b._createdAt)
      .map((post, index) => (
        <ProjectItem key={post.title} index={index} post={post}>
          <ProjectBody post={post} />
        </ProjectItem>
      ));
  };

  if (!mappedPosts.length) <Spinner />;

  return (
    <>
      <Select
        alignSelf={{ lg: "flex-end" }}
        variant="filled"
        w={120}
        onChange={handleChangeFilter}
      >
        <option value="recent">Recent</option>
        <option value="oldest">Oldest</option>
      </Select>
      {filter === "recent" ? postFilteredRecent() : postFilteredOldest()}
    </>
  );
}

const ProjectBody = ({ post }) => {
  return (
    <Stack
      h={{ lg: "100%" }}
      paddingBottom={{ base: 8, sm: 8, md: 8 }}
      paddingTop={{ base: 8, sm: 8, md: 8, lg: 0 }}
      paddingX={6}
      w={{ md: "100%", lg: "50%" }}
    >
      <Stack color="#fbfbfc" justifyContent="center" marginLeft={4} spacing={4}>
        <Text as={"h3"}>{post.title}</Text>
        <Text as={"h5"}>Tech used</Text>
        <BadgeContainers post={post} />
        <DescriptionContainer post={post} />
        <ButtonsContainers post={post} />
      </Stack>
    </Stack>
  );
};

const ProjectItem = ({ children, post, index }) => {
  return (
    <MotionStack
      borderRadius={20}
      boxShadow="xl"
      className={
        index % 2 === 0 ? "project-list-card-odd" : "project-list-card-even" 
      }
      data-aos="zoom-in"
      flexDirection={{
        base: "column-reverse",
        sm: "column-reverse",
        md: "column-reverse",
      }}
      h={{ sm: "100%", md: "100%", lg: "100%" }}
      overflow="hidden"
      paddingX={{ md: 0, lg: 4 }}
      paddingY={{ md: 0, lg: 8 }}
      position="relative"
      w={{ base: 340, sm: 500, md: 500, lg: "100%" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        alt={post.mainImage.name}
        backgroundSize="cover"
        borderBottomRightRadius={{ md: 20 }}
        borderTopLeftRadius={{ md: 25, lg: 25 }}
        bottom={{ lg: 0 }}
        h={{ lg: "auto" }}
        position={{ lg: "absolute" }}
        right={{ lg: 0 }}
        src={post.mainImage}
        w={{ md: "100%", lg: 450 }}
      />
      {children}
    </MotionStack>
  );
};

const ButtonsContainers = ({ post }) => {
  return (
    <Stack direction="row" w="100%">
      <NextLink passHref as={`${post.buttonDemo}`} href={post.buttonDemo}>
        <Link isExternal w="50%">
          <Button backgroundColor="pink.500" w="100%">
            <Search2Icon marginRight={2} />
            <Text lineHeight="3">View</Text>
          </Button>
        </Link>
      </NextLink>

      {post.buttonCode ? (
        <NextLink passHref as={`${post.buttonCode}`} href={post.buttonCode}>
          <Link isExternal w="50%">
            <Button backgroundColor="blackAlpha.500" w="100%">
              <Icon as={FontAwesomeIcon} icon={faCode} marginRight={2} />
              <Text lineHeight="3">Code</Text>
            </Button>
          </Link>
        </NextLink>
      ) : null}
    </Stack>
  );
};

const BadgeContainers = ({ post }) => {
  return (
    <Stack direction="row" noOfLines={2}>
      {post.techUsed.map((tech) => (
        <Badge
          key={tech}
          colorScheme="pink"
          justifySelf="center"
          paddingX={{ base: 1, sm: 2, md: 4, lg: 4 }}
          textAlign="center"
        >
          {tech}
        </Badge>
      ))}
    </Stack>
  );
};

const DescriptionContainer = ({ post }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <VStack alignItems="flex-start">
      {post.body.map((text) =>
        text.children.map((textChildren) =>
          textChildren.text.length > 150 ? (
            <>
              <Collapse in={show} startingHeight={50}>
                <Text as={"p"} color="white" marginBottom={4}>
                  {`${textChildren.text}`}
                </Text>
              </Collapse>
              <Button
                backgroundColor="transparent"
                border="none"
                color="cyan"
                marginLeft={1}
                paddingX={0}
                size="xs"
                onClick={handleToggle}
              >
                {!show ? "More..." : "Less"}
              </Button>
            </>
          ) : (
            <Text>{textChildren.text}</Text>
          )
        )
      )}
    </VStack>
  );
};
