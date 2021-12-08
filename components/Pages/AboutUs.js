import React from "react";
import { View, Image, Heading, Center, NativeBaseProvider } from "native-base";
import image from "../../assets/undraw_meet_the_team_re_4h08.svg";
import { Text } from "react-native";
// REVIEW: Remove all unused imports

export const AboutUs = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
        }}
        alt="image"
        width="390"
        height="486"
        // overflow="visible"
      />
      <Center>
        <Text
          pt="3"
          mt="400"
          width="326"
          height="60"
          fontWeights="600"
          fontWeight="600"
          overflow="hidden"
          wordWrap="break-word"
          color="#000000"
          fontSize="16"
          textAlign="center"
          mx="2"
          letterSpacing="0"
          lineHeight="20"
          fontFamily="Epilogue"

          // fontStyle= "normal"
          // fontFamily= "Epilogue"
        >
          Maia is your personal butler. Whatever you need done, Maia can help.{" "}
        </Text>
        <Text width="219" height="45" fontWeight="800">
          {" "}
          We provide personalized services that help save you time so you can do
          more of the things that matter most.
        </Text>
      </Center>
    </View>
  );
};

// REVIEW: Remove this you don't need it, you can wrap the upper code with the Center and remove this part

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <AboutUs />
      </Center>
    </NativeBaseProvider>
  );
};
