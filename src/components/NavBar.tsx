import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} boxSize="50px" />
      <Text>GameFinder</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
