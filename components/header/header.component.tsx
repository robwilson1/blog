import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center as="header" height={100} width="full">
      <Flex height="full" width="container.xl" alignItems="center" p="4">
        <Box>
          <Heading size="md">Robert A. Wilson</Heading>
        </Box>

        <Spacer />

        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Center>
  );
};

export default Header;
