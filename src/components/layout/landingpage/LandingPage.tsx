import { Flex } from "@chakra-ui/react";
import NavBar from "../../sections/navbar/Navbar";

export default function LandingLayout(props: any) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <NavBar />
      {props.children}
    </Flex>
  );
}
