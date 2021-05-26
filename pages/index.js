import React from 'react';
import { Stack, useColorModeValue } from '@chakra-ui/react';
import { Navbar, About, Contact, Landing, Projects } from '../components';

export default function Home({ posts }) {
  const bg = useColorModeValue('#fbfbfc', '#0a0a0a');
  const color = useColorModeValue('#0a0a0a', '#fbfbfc');

  return (
    <Stack overflowX="hidden" bg={bg}>
      <Navbar color={color} />
      <Landing color={color} />
      <Projects posts={posts} color={color} />
      <About color={color} />
      <Contact color={color} />
    </Stack>
  );
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent('*[ _type == "post"]');
  const url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_PROJECT_DATASET}?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
