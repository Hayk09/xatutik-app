import React from "react";
import { Text, Box, Flex } from "native-base";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <Flex h="full">
      <Box>
        <Navbar />
      </Box>
      {children}
      <Footer />
    </Flex>
  );
};

export default DefaultLayout;
