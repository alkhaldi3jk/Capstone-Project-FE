import React from "react";
import {
  View,
  Image,
  Heading,
  Center,
  Box,
  NativeBaseProvider,
} from "native-base";
import image from "../../assets/undraw_meet_the_team_re_4h08.svg";
import { Text } from "react-native";
import AnimatedLottieView from "lottie-react-native";

export const AboutUs = () => {
  return (
    <View>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
      <AnimatedLottieView
        source={require("../../assets/aboutus3.json")}
        loop
        width="200%"
        height="200%"
        // marginTop="8%"
        marginRight="50%"
        // marginLeft="20%"
        autoPlay/>
          <Center>
      <Heading
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
    
  >It’s About Time. </Heading>
  <Text
  width="219"
  height="45"
  fontWeight="800">Time is our most precious, non-renewable resource. By helping people to handle the weekly tasks and to-dos, we are giving them the time and headspace to be their greatest selves.</Text>
  </Center>
  </Box>
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
