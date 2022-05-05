import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MotionConfig } from "framer-motion";
import { Layout, MDXFormatter } from "../components";
import theme from "../theme";
import "reset-css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MotionConfig reducedMotion="user">
      <ChakraProvider theme={theme}>
        <Layout>
          <MDXFormatter>
            <Component {...pageProps} />
          </MDXFormatter>
        </Layout>
      </ChakraProvider>
    </MotionConfig>
  );
};

export default MyApp;
