import React from "react";
import Container from "../../layouts/Container";
import ListItem from "../../components/ListItem";
import { useSelector } from "react-redux";
import {
  Box,
  Flex,
  ScrollView,
  Input,
  SearchIcon,
  Stack,
  Image,
  HStack,
} from "native-base";
import HeadersList from "./HeadersList";

const Description = ({ navigation }) => {
  const value = useSelector((state) => state.toolkit.todos);
  const [filters, setFilters] = React.useState("");

  return (
    <Container navigation={navigation}>
      <Stack w="full" alignItems="center" mt={8} mb={12}>
        <Input
          type="search"
          w={360}
          placeholder="search"
          borderRadius={12}
          onChange={(e) => setFilters(e.target.value)}
          InputRightElement={
            <Box mr={4}>
              <SearchIcon />
            </Box>
          }
        />
      </Stack>
      <Flex flex={1} justifyContent="center">
        <HeadersList />
        <ScrollView w="full">
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            w="full"
          >
            {value
              // ?.filter((item) =>
              //   item?.title
              //     ?.toLowerCase()
              //     .includes(filters?.toLocaleLowerCase())
              // )
              .map((item) => (
                <ListItem
                  key={item.id}
                  source={{ uri: item.uri }}
                  title={item.title}
                  alt={item.title}
                />
              ))}
          </Flex>
        </ScrollView>

        {/* <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <ListItem
              source={{ uri: item.uri }}
              title={item.title}
              alt={item.title}
            />
          )}
          keyExtractor={(item) => item.id}
        /> */}
      </Flex>
    </Container>
  );
};

export default Description;
