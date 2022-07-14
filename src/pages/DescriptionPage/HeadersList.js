import React from "react";
import { HEADERS } from "../../constants/headers";
import { Text, Button, Flex, FlatList, HStack, ScrollView } from "native-base";

const HeadersList = ({ navigation }) => {
  return (
    <Flex mt={10}>
      <ScrollView horizontal>
        {HEADERS?.map((item, index) => (
          <HStack key={index} space={2} padding={2}>
            <Button
              variant="outline"
              borderRadius={10}
              w={140}
              colorScheme="green"
              borderWidth={2}
              borderColor="green.600"
            >
              {item}
            </Button>
          </HStack>
        ))}
      </ScrollView>

      {/* <FlatList
        horizontal
        data={HEADERS}
        renderItem={({ item, index }) => <Button>{item.headers}</Button>}
        keyExtractor={(item) => item}
      /> */}
    </Flex>
  );
};

export default HeadersList;
