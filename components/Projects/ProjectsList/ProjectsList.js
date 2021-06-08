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
  Collapse,
  Spinner,
  Select,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search2Icon } from '@chakra-ui/icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ImageUrlBuilder from '@sanity/image-url';
import { motion } from 'framer-motion';

const MotionStack = motion(Stack);

export default function ProjectsList({ posts, isShowing }) {
  const [mappedPosts, setMappedPosts] = useState([]);
  const [filter, setFilter] = useState('recent');

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
  }, []);

  const handleChangeFilter = (e) => setFilter(e.target.value);

  const postFilteredRecent = () => {
    if (!isShowing) {
      return mappedPosts
        .sort((a, b) => b._createdAt - a._createdAt)
        .slice(0, 3)
        .map((post, index) => (
          <ProjectItem key={index} post={post} index={index}>
            <ProjectBody post={post} />
          </ProjectItem>
        ));
    } else {
      return mappedPosts
        .sort((a, b) => b._createdAt - a._createdAt)
        .map((post, index) => (
          <ProjectItem key={index} post={post} index={index}>
            <ProjectBody post={post} />
          </ProjectItem>
        ));
    }
  };

  const postFilteredOldest = () => {
    if (!isShowing) {
      return mappedPosts
        .sort((a, b) => a._createdAt - b._createdAt)
        .slice(0, 3)
        .map((post, index) => (
          <ProjectItem key={index} post={post} index={index}>
            <ProjectBody post={post} />
          </ProjectItem>
        ));
    } else {
      return mappedPosts
        .sort((a, b) => a._createdAt - b._createdAt)
        .map((post, index) => (
          <ProjectItem key={index} post={post} index={index}>
            <ProjectBody post={post} />
          </ProjectItem>
        ));
    }
  };

  if (!mappedPosts.length) <Spinner />;

  return (
    <>
      <Select
        variant="filled"
        w={120}
        alignSelf="flex-end"
        onChange={handleChangeFilter}
      >
        <option value="recent">Recent</option>
        <option value="oldest">Oldest</option>
      </Select>
      {filter === 'recent' ? postFilteredRecent() : postFilteredOldest()}
    </>
  );
}

const ProjectBody = ({ post }) => {
  return (
    <Stack
      paddingX={6}
      paddingTop={{ base: 8, sm: 8, md: 8, lg: 0 }}
      paddingBottom={{ base: 8, sm: 8, md: 8 }}
      w={{ md: '100%', lg: '50%' }}
      h={{ lg: '100%' }}
    >
      <Stack justifyContent="center" marginLeft={4} spacing={4} color="#fbfbfc">
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
      data-aos="zoom-in"
      boxShadow="xl"
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
          <Button w="100%" backgroundColor="pink.500">
            <Search2Icon marginRight={2} />
            <Text lineHeight="3">View</Text>
          </Button>
        </Link>
      </NextLink>

      {post.buttonCode ? (
        <NextLink href={post.buttonCode} as={`${post.buttonCode}`} passHref>
          <Link w="50%" isExternal>
            <Button w="100%" backgroundColor="blackAlpha.500">
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
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <VStack alignItems="flex-start">
      {post.body.map((text) =>
        text.children.map((textChildren) =>
          textChildren.text.length > 150 ? (
            <>
              <Collapse startingHeight={50} in={show}>
                <Text as={'p'} color="white" marginBottom={4}>
                  {`${textChildren.text}`}
                </Text>
              </Collapse>
              <Button
                color="cyan"
                size="xs"
                backgroundColor="transparent"
                paddingX={0}
                marginLeft={1}
                onClick={handleToggle}
                border="none"
              >
                More...
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
