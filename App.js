import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Navigation from "./components/Navigation";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
        {/* <MyDrawer /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}


