import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/HomePage";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import SignIn from "../pages/SignIn";

const RouteProvider = () => {
  const Stack = createNativeStackNavigator();

  // const auth = !Auth;

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="first" component={FirstPage} />
        <Stack.Screen name="second" component={SecondPage} />
        <Stack.Screen name="signin" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteProvider;
