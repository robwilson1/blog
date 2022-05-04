import React from "react";
import {
  Box,
  Container,
  Heading,
  Spacer,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

type MetaContent = {
  author: string;
  date: string;
  title: string;
  snippet: string;
};

const PostLayout: React.FC<{
  meta: MetaContent;
  children: React.ReactNode;
}> = ({ meta, children }) => {
  const mainBg = useColorModeValue("gray.50", "gray.900");
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
          {meta.title}
        </Heading>
      </Box>

      <Spacer />

      <Box as="article" bg={mainBg} height="66vh" overflowY="scroll">
        <Container as="section" maxWidth="container.xl">
          <Stack spacing={8} paddingY="10">
            {children}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default PostLayout;
