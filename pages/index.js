import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Navbar, About, Contact, Landing, Projects } from '../components';

export default function Home({ posts }) {
  return (
    <Stack overflowX="hidden">
      <Navbar />
      <Landing />
      <Projects posts={posts} />
      <About />
      <Contact />
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
