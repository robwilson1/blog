import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage, GetStaticProps } from "next";
import NextLink from "next/link";
import getPosts from "../lib/get-posts";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts: posts
        .filter((post) => !!post?.data?.title)
        .map((post) => ({
          path: `/posts/${post.filename.slice(0, -4)}`, // strip the .mdx from the end of the string
          data: post.data,
        })),
    },
  };
};

const Home: NextPage<any> = ({ posts }) => {
  const titleGradient = useColorModeValue(
    "blue.400, pink.600",
    "pink.400, yellow.400"
  );

  return (
    <>
      <Box width="fit-content" alignSelf="center">
        <Heading
          as="h1"
          bgGradient={`linear(to-r, ${titleGradient})`}
          bgClip="text"
          textAlign="center"
          paddingY="10"
          fontSize={{ base: "4xl", xl: "6xl" }}
        >
          Welcome to my blog!
        </Heading>
      </Box>

      <Spacer />

      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10}>
        {posts.map((post: any) => (
          <LinkBox
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            rounded="md"
            key={post.data.title}
          >
            <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
              {post.data.date}
            </Box>
            <Heading size="md" my="2">
              <NextLink href={post.path} passHref>
                <LinkOverlay>{post.data.title}</LinkOverlay>
              </NextLink>
            </Heading>
            <Text>{post.data.snippet}</Text>
          </LinkBox>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
