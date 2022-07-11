import React from "react";
import { Text, Flex, Button, Image } from "native-base";
import AuthLayout from "../../layouts/AuthLayout";
import { images } from "../../constants";

const FirstPage = ({ navigation }) => {
  return (
    <AuthLayout>
      <Flex justifyContent="center" alignItems="center" bg="white">
        <Image source={images.flow16} alt="ss" />
        <Flex position="relative">
          {/* <Text fontSize={25} color="lime.800">
            Welcome to Xatutik
          </Text> */}
          <Button
            mt={39}
            colorScheme="green"
            w="300"
            borderRadius={8}
            onPress={() => navigation.navigate("second")}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </AuthLayout>
  );
};

export default FirstPage;
