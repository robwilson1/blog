import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "reset-css";
import { Layout, MDXFormatter } from "../components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <MDXFormatter>
          <Component {...pageProps} />
        </MDXFormatter>
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
