import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import { Heading, Code, Text } from "@chakra-ui/react";
import React from "react";

const ResponsiveImage = (props: any) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage,
  h1: (props: any) => <Heading as="h1">{props.children}</Heading>,
  h2: (props: any) => <Heading as="h2">{props.children}</Heading>,
  h3: (props: any) => <Heading as="h3">{props.children}</Heading>,
  p: (props: any) => <Text as="p">{props.children}</Text>,
  code: (props: any) => <Code>{props.children}</Code>,
};

const MDXFormatter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXFormatter;
