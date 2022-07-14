import React from "react";
import { Flex, Image, HStack, Spinner, Button } from "native-base";
import { images } from "../../constants";

const Home = ({ navigation }) => {
  return (
    <Flex
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      padding={10}
    >
      <Image source={images.thumb_logo} alt="ll" />
      <Flex>
        <HStack space={16} justifyContent="center">
          {/* <Spinner color="green.500" size="lg" /> */}
        </HStack>
        <Button
          w={350}
          colorScheme="green"
          borderRadius={12}
          onPress={() => navigation.navigate("first")}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
