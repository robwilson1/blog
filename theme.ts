import { extendTheme, type ThemeOverride } from "@chakra-ui/react";

export const theme: ThemeOverride = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      "50": "#F7FAFC",
      "100": "#d4d5de",
      "200": "#b8b9c4",
      "300": "#9b9dad",
      "400": "#7f8196",
      "500": "#65677c",
      "600": "#4f5062",
      "700": "#383946",
      "800": "#1f2028",
      "900": "#14151a",
    },
  },
};

export default extendTheme(theme);
