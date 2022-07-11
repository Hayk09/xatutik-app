import React from "react";
import { Text, Flex, Box, ArrowBackIcon, Button } from "native-base";

const Navbar = ({ navigation }) => {
  return (
    <Flex
      w="full"
      mt={6}
      ml={1}
      bg="white"
      // justifyContent="flex-start"
      // alignItems="center"
      // justifyContent="space-between"
      // alignItems="center"
      // flexDirection="row"
    >
      <Button
        variant="ghost"
        w="10"
        colorScheme="green"
        onPress={() => navigation.navigate("home")}
      >
        <ArrowBackIcon size="4" />
      </Button>
    </Flex>
  );
};

export default Navbar;
