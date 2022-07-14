import React from "react";
import { NativeBaseProvider } from "native-base";
import { theme } from "native-base";
import RouteProvider from "./src/RouteProvider/RouteProvider";
import { Provider } from "react-redux";
import { store } from "./src/toolkitRedux";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <RouteProvider />
      </Provider>
    </NativeBaseProvider>
  );
}
