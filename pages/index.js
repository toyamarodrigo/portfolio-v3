import React from "react"
import Head from "next/head"
import { Stack, useColorModeValue } from "@chakra-ui/react"

import { Navbar, About, Contact, Landing, Projects } from "../components"

export default function Home({ posts }) {
  const bg = useColorModeValue("#fbfbfc", "#0a0a0a")
  const color = useColorModeValue("#0a0a0a", "#fbfbfc")

  return (
    <Stack bg={bg} overflowX="hidden">
      <Head>
        <title>Rodrigo Toyama - Full-stack Developer</title>
        <meta charSet="utf-8" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      </Head>
      <Navbar color={color} />
      <Landing color={color} />
      <Projects color={color} posts={posts} />
      <About color={color} />
      <Contact color={color} />
    </Stack>
  )
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent('*[ _type == "post"]')
  const url = `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_PROJECT_DATASET}?query=${query}`

  const result = await fetch(url).then((res) => res.json())

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: []
      }
    }
  } else {
    return {
      props: {
        posts: result.result
      }
    }
  }
}
