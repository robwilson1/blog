import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const mainBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Flex as="article" width="full" height="full" flexDirection="column">
      <Heading
        as="h1"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        textAlign="center"
        paddingY="10"
      >
        Welcome to my blog!
      </Heading>

      <Spacer />

      <Container
        as="section"
        borderRadius={{ base: 0, xl: "3xl" }}
        maxWidth="container.lg"
        height="66vh"
        overflowY="scroll"
        bg={mainBg}
      >
        <Stack spacing={8} paddingY="10">
          <Link href="https://nextjs.org/docs" isExternal>
            <Heading as="h2">Documentation &rarr;</Heading>
            <Text>
              Find in-depth information about Next.js features and API.
            </Text>
          </Link>

          <Link href="https://nextjs.org/learn">
            <Heading as="h2">Learn &rarr;</Heading>
            <Text>
              Learn about Next.js in an interactive course with quizzes!
            </Text>
          </Link>

          <Link href="https://github.com/vercel/next.js/tree/canary/examples">
            <Heading as="h2">Examples &rarr;</Heading>
            <Text>
              Discover and deploy boilerplate example Next.js projects.
            </Text>
          </Link>

          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading as="h2">Deploy &rarr;</Heading>
            <Text>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Link>

          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading as="h2">Deploy &rarr;</Heading>
            <Text>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Link>

          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading as="h2">Deploy &rarr;</Heading>
            <Text>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Link>

          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading as="h2">Deploy &rarr;</Heading>
            <Text>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Link>

          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading as="h2">Deploy &rarr;</Heading>
            <Text>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Link>

          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading as="h2">Deploy &rarr;</Heading>
            <Text>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Link>
        </Stack>
      </Container>

      <Spacer />
    </Flex>
  );
};

export default Home;
