import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/1.png";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image borderRadius={5} src={Logo} boxSize="50px" />
      <Text fontSize={20}>Pixel Pedia</Text>
      <ColorModeSwitch  />
    </HStack>
  );
};

export default NavBar;
