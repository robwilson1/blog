import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import type { InferGetStaticPropsType, NextPage, GetStaticProps } from "next";
import { PostCard } from "../components";
import getPosts from "../lib/get-posts";
import type { PostMetadata } from "../types";

export const getStaticProps: GetStaticProps<{
  posts: PostMetadata[];
}> = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts: posts
        .filter((post) => !!post?.metadata?.title)
        .map((post) => ({
          path: `/posts/${post.filename.slice(0, -4)}`, // strip the .mdx from the end of the string
          ...post.metadata,
        })),
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
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

      <Container as="section" maxWidth="container.xl">
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10}>
          {posts.map((post) => (
            <PostCard {...post} key={post.title} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
