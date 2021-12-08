import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Navigation from "./components/Navigation";
import { StyleSheet } from "react-native";
import { useFonts, Epilogue } from "@expo-google-fonts/inter";
import * as Font from "expo-font";
// REVIEW: Remove all unused imports in all components

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
