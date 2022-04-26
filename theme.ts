import { extendTheme, type ThemeOverride } from "@chakra-ui/react";

const theme: ThemeOverride = {
  config: {
    initialColorMode: "system",
  },
  colors: {
    gray: {
      "50": "#f1f1f9",
      "100": "#d4d5de",
      "200": "#b8b9c4",
      "300": "#9b9dad",
      "400": "#7f8196",
      "500": "#65677c",
      "600": "#4f5062",
      "700": "#383946",
      "800": "#21222b",
      "900": "#1F2028",
    },
  },
};

export default extendTheme(theme);
