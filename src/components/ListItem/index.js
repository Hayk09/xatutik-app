import React from "react";
import { Text, Flex, Image, Button, FavouriteIcon } from "native-base";

const ListItem = ({ navigation, title, source, alt }) => {
  return (
    <Flex w="2/5" position="relative">
      <Button variant="link" position="absolute" top={0} left={0} zIndex={10}>
        <FavouriteIcon />
      </Button>
      <Image source={source} alt={alt} size={160} />
      <Text>{title}</Text>
    </Flex>
    // <Flex w={120} mt={12} ml={6}>
    //   <Button variant="subtle" colorScheme="blue" borderRadius={26}>
    //     <Kbd bg="white" alignItems="flex-start">
    //       {/* <Text>{title}</Text> */}
    //       <Button variant="link">
    //         <FavouriteIcon />
    //       </Button>
    //       {/* <Image source={source} alt={alt} size="sm" w={5} h={5} /> */}
    //       <Image source={source} alt={alt} size="lg" />
    //     </Kbd>
    //   </Button>
    // </Flex>
    // <VStack space={3} w="90%">
    //   <HStack justifyContent="space-between">
    //     <Image source={source} alt={alt} size={160} />
    //     <Divider />
    //     <Text>{title}</Text>
    //     {/* <Icon name="arrow-forward" /> */}
    //   </HStack>
    // </VStack>
  );
};

export default ListItem;
