import { Search2Icon } from '@chakra-ui/icons';
import {
  Stack,
  Image,
  Text,
  Badge,
  HStack,
  VStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function ProjectsList() {
  const project = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Imagen de proyecto',
  };

  return (
    <>
      <Stack
        position="relative"
        borderRadius={20}
        marginY={10}
        overflow="hidden"
        w={{ base: 340, sm: 500, md: 500, lg: '100%' }}
        h={{ sm: '100%', md: '100%', lg: 400 }}
        className="project-list-card"
        paddingX={{ md: 0, lg: 4 }}
        paddingY={{ md: 0, lg: 8 }}
        flexDirection={{
          base: 'column-reverse',
          sm: 'column-reverse',
          md: 'column-reverse',
        }}
      >
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          position={{ lg: 'absolute' }}
          right={{ lg: 0 }}
          bottom={{ lg: 0 }}
          w={{ md: '100%', lg: 450 }}
          h={{ lg: 300 }}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          borderTopLeftRadius={{ md: 25, lg: 25 }}
          borderBottomRightRadius={{ md: 20 }}
        />
        <Stack
          paddingX={6}
          paddingTop={{ base: 8, sm: 8, md: 8, lg: 0 }}
          paddingBottom={{ base: 8, sm: 8, md: 8 }}
          w={{ md: '100%', lg: '50%' }}
          h={{ lg: '100%' }}
        >
          <Stack justifyContent="center" marginLeft={4} spacing={4}>
            <Text as={'h3'}>Proyect Name</Text>
            <Text as={'h5'}>Tech used</Text>
            <HStack>
              <Badge colorScheme="pink" paddingX={2}>
                HTML
              </Badge>
              <Badge colorScheme="pink" paddingX={2}>
                CSS
              </Badge>
              <Badge colorScheme="pink" paddingX={2}>
                Javascript
              </Badge>
              <Badge colorScheme="blue" paddingX={2}>
                React
              </Badge>
            </HStack>
            <VStack>
              <Text color="white" marginBottom={4}>
                Main objective of this project was managing Customers and their
                Invoices. Developed all type of CRUD operations, learning Spring
                Framework and Java in the process also how Hibernate works and
                the use of Thymeleaf and JQuery.
              </Text>
            </VStack>
            <Stack direction="row" w="100%">
              <Button w="50%" colorScheme="pink">
                <Search2Icon marginRight={2} />
                <Text lineHeight="3">View</Text>
              </Button>
              <Button w="50%" colorScheme="blackAlpha">
                <Icon as={FontAwesomeIcon} icon={faCode} marginRight={2} />
                <Text lineHeight="3">Code</Text>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
