import React from "react";
import {
  View,
  Image,
  Heading,
  Center,
  NativeBaseProvider,
} from "native-base";
import image from "../../assets/undraw_meet_the_team_re_4h08.svg";
import { Text } from "react-native";

export const AboutUs = () => {
  return (
    <View>
      <Image
        source={require("../../assets/undraw_meet_the_team_re_4h08.svg")}
      />
      ;
      <Text pt="3" mt="400">
        About us blah blah...illustrations will go here
      </Text>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <AboutUs/>
      </Center>
    </NativeBaseProvider>
  );
};
