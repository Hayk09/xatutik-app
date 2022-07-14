import React from "react";
import { Flex, Text, Box } from "native-base";
import Navbar from "../components/Navbar";

const AuthLayout = ({ children, navigation }) => (
  <Box w="full" h="full">
    <Navbar navigation={navigation} />
    <Flex
      flex={1}
      h="full"
      w="full"
      alignItems="center"
      justifyContent="center"
      bg="white"
    >
      {children}
    </Flex>
  </Box>
);

export default AuthLayout;
