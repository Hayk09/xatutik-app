import React from "react";
import { NativeBaseProvider } from "native-base";
import { theme } from "native-base";
import RouteProvider from "./src/RouteProvider/RouteProvider";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <RouteProvider />
    </NativeBaseProvider>
  );
}
