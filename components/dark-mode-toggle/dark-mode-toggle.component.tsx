import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Flex, Switch, useColorMode, VisuallyHidden } from "@chakra-ui/react";

const DarkModeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="row" gap={2} alignItems="center">
      <FaSun />
      <VisuallyHidden>Toggle dark mode</VisuallyHidden>
      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
        colorScheme="blackAlpha"
      />
      <FaMoon />
    </Flex>
  );
};

export default DarkModeToggle;
