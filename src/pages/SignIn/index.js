import React from "react";
import Container from "../../layouts/Container";
import { images } from "../../constants";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { checkeds } from "../../toolkitRedux/toolkitSlice";
import {
  Box,
  Image,
  Stack,
  Button,
  InfoIcon,
  QuestionIcon,
  Checkbox,
} from "native-base";

const SignIn = ({ navigation }) => {
  const [show, setShow] = React.useState(false);
  const [error, SetError] = React.useState(false);
  const checked = useSelector((state) => state.toolkit.checked);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.name && data.password) {
      try {
        if (data.name === "admin" && data.password === "1234") {
          navigation.navigate("description");
        } else {
          SetError(true);
        }
      } catch (e) {
        console.log(e, "error");
      }
    } else {
      SetError(true);
    }
  };

  return (
    <Container navigation={navigation}>
      <Stack space={6} w="100%" alignItems="center" mt={8}>
        <Image source={images.logo} w={200} h={200} alt="l" />
        <Stack space={8} mt={10} alignItems="center">
          <TextInput
            control={control}
            w={350}
            name="name"
            defaultValue={null}
            width={350}
            placeholder="name"
            type="text"
            borderRadius={10}
            borderColor={error ? "red.400" : "black"}
            InputLeftElement={
              <Box ml={2}>
                <QuestionIcon />
              </Box>
            }
          />

          {/* {error ? <Text color="red.400">problem name</Text> : <Text>''</Text>} */}
          <TextInput
            defaultValue={null}
            control={control}
            width={350}
            w={350}
            name="password"
            placeholder="Password"
            borderRadius={10}
            borderColor={error ? "red.400" : "black"}
            type={show ? "text" : "password"}
            InputRightElement={
              <Button onPress={() => setShow(!show)} variant="link">
                <InfoIcon />
              </Button>
            }
          />
          {/* {error ? <Text color="red.400">problem name</Text> : <Text>''</Text>} */}

          <Checkbox
            checked={checked}
            colorScheme="green"
            color="green"
            onChange={() => dispatch(checkeds())}
          >
            Remember me
          </Checkbox>

          <Button
            type="submit"
            colorScheme="green"
            w={350}
            mt={50}
            borderRadius={12}
            onPress={handleSubmit(onSubmit)}
          >
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SignIn;
