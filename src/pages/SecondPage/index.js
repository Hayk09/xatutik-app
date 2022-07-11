import React from "react";
import {
  Text,
  Box,
  Flex,
  Image,
  VStack,
  Input,
  Button,
  HStack,
  Divider,
} from "native-base";
import AuthLayout from "../../layouts/AuthLayout";
import { SIZES, FONTS } from "../../style";
import Container from "../../layouts/Container";
import { images } from "../../constants";

const SecondPage = ({ navigation }) => {
  return (
    <Container navigation={navigation}>
      <Flex flex={1} alignItems="center">
        <Text fontSize={SIZES.h1} textAlign="center" color="green.600">
          Green Garden
        </Text>
        <Image source={images.logo} w={200} h={200} alt="l" />
        <VStack space={6} mt={6}>
          <Button
            borderWidth={1}
            w={350}
            color="black"
            bg="white"
            borderRadius={12}
          >
            <HStack space={2}>
              <Image source={images.faceb} alt="fac" />
              <Text>Continue with Facebook</Text>
            </HStack>
          </Button>
          <Button
            borderWidth={1}
            w={350}
            color="black"
            bg="white"
            borderRadius={12}
          >
            <HStack space={2}>
              <Image source={images.google} alt="goog" />
              <Text>Continue with Facebook</Text>
            </HStack>
          </Button>
          <Button
            borderWidth={1}
            w={350}
            color="black"
            bg="white"
            borderRadius={12}
          >
            <HStack space={2}>
              <Image source={images.apple} alt="app" />
              <Text>Continue with Facebook</Text>
            </HStack>
          </Button>
        </VStack>
        <Divider bg="green.600" mt={60} thickness="2" mx="2" w={350} />
        <Text color="green.500">or</Text>
        <Button colorScheme="green" w={350} mt={16} borderRadius={12}>
          Sign In with password
        </Button>
        <HStack space={2} mt={4}>
          <Text mt={2}>Don`t have an account</Text>
          <Button variant="ghost" onPress={() => navigation.navigate("signin")}>
            <Text color="green.600">Sign In?</Text>
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default SecondPage;
