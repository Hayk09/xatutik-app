import { Text } from "native-base";
import React from "react";
import { Flex, Button, ArrowBackIcon } from "native-base";

// import { SIZES } from "../constants";

const Container = ({ children, navigation }) => {
  return (
    <Flex
      flex={1}
      bg="white"
      h="full"
      w="full"
      // justifyContent="center"
      // alignItems="center"
    >
      <Button
        mt={6}
        variant="ghost"
        w="10"
        colorScheme="green"
        onPress={() => navigation.navigate("home")}
      >
        <ArrowBackIcon size="4" />
      </Button>
      {children}
    </Flex>
  );
};

export default Container;
