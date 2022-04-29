import React from "react";
import { Box, Center, Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { DarkModeToggle } from "..";
import NextLink from "next/link";

const Header: React.FC = () => (
  <Center as="header" height={100} width="full">
    <Flex height="full" width="container.xl" alignItems="center" p="4">
      <Box>
        <NextLink href="/" passHref>
          <Link>
            <Heading size="md">Robert A. Wilson</Heading>
          </Link>
        </NextLink>
      </Box>

      <Spacer />

      <DarkModeToggle />
    </Flex>
  </Center>
);

export default Header;
