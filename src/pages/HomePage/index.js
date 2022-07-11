import React from "react";
import {
  Text,
  Flex,
  Image,
  HStack,
  Spinner,
  Button,
  VStack,
} from "native-base";
import { images } from "../../constants";

const Home = ({ navigation }) => {
  return (
    <Flex flex={1} justifyContent="center" alignItems="center" bg="white">
      <VStack space={105}>
        <Image source={images.thumb_logo} alt="ll" />
        <HStack space={16} justifyContent="center">
          {/* <Spinner color="green.500" size="lg" /> */}
        </HStack>
        <Button
          bg="green.400"
          w="300"
          borderRadius={8}
          onPress={() => navigation.navigate("first")}
        >
          Next
        </Button>
      </VStack>
    </Flex>
  );
};

export default Home;
