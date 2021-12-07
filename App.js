import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Navigation from "./components/Navigation";
import { StyleSheet } from "react-native";
import { useFonts, Epilogue } from '@expo-google-fonts/inter';

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   "Epilogue": require("./assets/Epilogue-2/static/Epilogue-Regular.ttf"),
  // });

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
