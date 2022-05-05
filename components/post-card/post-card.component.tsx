import React from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import Image from "next/image";
import { Box, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import type { PostMetadata } from "../../types";

const PostCard: React.FC<PostMetadata> = ({
  date,
  path,
  snippet,
  title,
  image,
}) => (
  <motion.article whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.05 }}>
    <LinkBox
      as="article"
      maxW="md"
      p="5"
      rounded="md"
      overflowWrap="break-word"
      boxShadow="xl"
    >
      <Box>
        <Image src={image.src} alt={image.alt} width="800" height="500" />
      </Box>

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
  </motion.article>
);

export default PostCard;
