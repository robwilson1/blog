import { Box, Center, Link } from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => (
  <Center as="footer" width="full" height={100}>
    <Link
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <Box as="span">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </Box>
    </Link>
  </Center>
);

export default Footer;
