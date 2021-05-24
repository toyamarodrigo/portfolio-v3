import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import {
  Stack,
  Image,
  Text,
  Badge,
  VStack,
  Icon,
  Button,
  Link,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search2Icon } from '@chakra-ui/icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ImageUrlBuilder from '@sanity/image-url';
import { motion } from 'framer-motion';

const MotionStack = motion(Stack);

export default function ProjectsList({ posts, isShowing }) {
  const [mappedPosts, setMappedPosts] = useState([]);

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
            mainImage: imgBuilder.image(post.mainImage),
          };
        })
      );
    }
  }, []);

  if (!mappedPosts.length) <Text as={'h1'}>LOADING..</Text>;

  if (!isShowing) {
    return (
      <>
        {mappedPosts.slice(0, 3).map((post, index) => (
          <ProjectItem key={index} post={post} index={index}>
            <ProjectBody post={post} />
          </ProjectItem>
        ))}
      </>
    );
  } else {
    return (
      <>
        {mappedPosts.map((post, index) => (
          <ProjectItem key={index} post={post} index={index}>
            <ProjectBody post={post} />
          </ProjectItem>
        ))}
      </>
    );
  }
}

const ProjectBody = ({ post }) => {
  return (
    <Stack
      paddingX={6}
      paddingTop={{ base: 8, sm: 8, md: 8, lg: 0 }}
      paddingBottom={{ base: 8, sm: 8, md: 8 }}
      w={{ md: '100%', lg: '50%' }}
      h={{ lg: '100%' }}
      layout
    >
      <Stack justifyContent="center" marginLeft={4} spacing={4}>
        <Text as={'h3'}>{post.title}</Text>
        <Text as={'h5'}>Tech used</Text>
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
      position="relative"
      borderRadius={20}
      overflow="hidden"
      w={{ base: 340, sm: 500, md: 500, lg: '100%' }}
      h={{ sm: '100%', md: '100%', lg: '100%' }}
      className={
        index % 2 === 0 ? `project-list-card-odd` : `project-list-card-even`
      }
      paddingX={{ md: 0, lg: 4 }}
      paddingY={{ md: 0, lg: 8 }}
      flexDirection={{
        base: 'column-reverse',
        sm: 'column-reverse',
        md: 'column-reverse',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Image
        src={post.mainImage}
        alt={post.mainImage.name}
        position={{ lg: 'absolute' }}
        right={{ lg: 0 }}
        bottom={{ lg: 0 }}
        w={{ md: '100%', lg: 450 }}
        h={{ lg: 'auto' }}
        backgroundSize="cover"
        borderTopLeftRadius={{ md: 25, lg: 25 }}
        borderBottomRightRadius={{ md: 20 }}
      />
      {children}
    </MotionStack>
  );
};

const ButtonsContainers = ({ post }) => {
  return (
    <Stack direction="row" w="100%">
      <NextLink href={post.buttonDemo} as={`${post.buttonDemo}`} passHref>
        <Link w="50%" isExternal>
          <Button w="100%" colorScheme="pink">
            <Search2Icon marginRight={2} />
            <Text lineHeight="3">View</Text>
          </Button>
        </Link>
      </NextLink>

      {post.buttonCode ? (
        <NextLink href={post.buttonCode} as={`${post.buttonCode}`} passHref>
          <Link w="50%" isExternal>
            <Button w="100%" colorScheme="blackAlpha">
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
      {post.techUsed.map((tech, index) => (
        <Badge
          key={index}
          colorScheme="pink"
          paddingX={{ base: 1, sm: 2, md: 4, lg: 4 }}
          justifySelf="center"
          textAlign="center"
        >
          {tech}
        </Badge>
      ))}
    </Stack>
  );
};

const DescriptionContainer = ({ post }) => {
  return (
    <VStack alignItems="flex-start">
      {post.body.map((text) =>
        text.children.map((textChildren) =>
          textChildren.text.length < 300 ? (
            <Text as={'p'} color="white" marginBottom={4}>
              {textChildren.text}
            </Text>
          ) : (
            <Text as={'p'} color="white" marginBottom={4}>
              {`${textChildren.text.substring(0, 250)}`}
              <Button
                color="cyan"
                size="sm"
                backgroundColor="transparent"
                paddingX={0}
                marginLeft={1}
              >
                More...
              </Button>
            </Text>
          )
        )
      )}
    </VStack>
  );
};
