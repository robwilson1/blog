import React from "react";
import NextLink from "next/link";
import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import type { PostMetadata } from "../../types";

const PostCard: React.FC<PostMetadata> = ({ date, path, snippet, title }) => (
  <LinkBox
    as="article"
    maxW="sm"
    p="5"
    borderWidth="1px"
    rounded="md"
    key={title}
  >
    <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
      {date}
    </Box>
    <Heading size="md" my="2">
      <NextLink href={path} passHref>
        <LinkOverlay>{title}</LinkOverlay>
      </NextLink>
    </Heading>
    <Text>{snippet}</Text>
  </LinkBox>
);

export default PostCard;
