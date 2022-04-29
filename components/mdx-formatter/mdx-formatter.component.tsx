import { MDXProvider } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";
import { Heading, Code, Text } from "@chakra-ui/react";
import React from "react";

type BasicProps = {
  children: React.ReactNode;
};

const ResponsiveImage = (props: ImageProps) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage,
  h1: (props: BasicProps) => <Heading as="h1">{props.children}</Heading>,
  h2: (props: BasicProps) => <Heading as="h2">{props.children}</Heading>,
  h3: (props: BasicProps) => <Heading as="h3">{props.children}</Heading>,
  p: (props: BasicProps) => <Text as="p">{props.children}</Text>,
  code: (props: BasicProps) => <Code>{props.children}</Code>,
};

const MDXFormatter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={components as any}>{children}</MDXProvider>;
};

export default MDXFormatter;
