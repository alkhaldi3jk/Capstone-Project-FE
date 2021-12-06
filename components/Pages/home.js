import React from "react";

import authStore from "../../stores/authStore";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

import {
  Heading,
  Icon,
  Button,
  Flex,
  Image,
  Center,
  NativeBaseProvider,
  Text,
  View,
} from "native-base";
// import { Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export function Home({ navigation }) {
  const serviceList = serviceStore.services.map((service) => (
    <ServiceItem service={service} key={service._id} navigation={navigation} />
  ));

  return (
    <View flex="-20">
      <Heading
        // size="xl"
        fontSize="60"
        overflow="hidden"
        fontWeight="900"
        // mt="-550"
        mt="-90"
        height="100"
        width="400"
        color="#000000"
        // fontFamily="Epilogue"
        fontSize="xl"
        letterSpacing="0"
        textAlign="center"
        line-height="25"
      >
        Welcome home, we're Maia.
      </Heading>
      <Text
        mt="-59"
        height="45"
        fontWeight="600"
        overflow="hidden"
        wordWrap="break-word"
        color="#000000"
        fontSize="16"
        textAlign="center"
        mx="1"
        letterSpacing="0"
        lineHeight="20px"
      >
        {" "}
        The first app-based personal assistant designed for the future of
        living.{" "}
      </Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1627662166825-a860471632e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80",
        }}
        alt="Alternate Text"
        size="2xl"
        resizeMode="cover"
        borderRadius="40"
        // height="271"
        // width="210"
        width="410"
        height="471"
        opacity="0.88"
        // bottom="-320"
        bottom="-120"
        left="4"
      />
      <Button
        leftIcon={<Icon as={Feather} name="user" size="sm" />}
        bg="white"
        borderRadius="6"
        // padding="3.5"
        alignment="center"
        fontSize="11"
        onHoverIn="1.1"
        //  padding="2"
        //  size="10"
        //  paddingLeft="20"
        //  paddingRight="20"
        //  alignItems="center"

        //  overflowWrap="2"
        //  marginLeft="25"
        //  marginRight="25"
      >
        Sign in
      </Button>
      {/* <Image source={require('../../assets/Maialogo.png')} /> */}


export default observer(Home);


export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Home />
      </Center>
    </NativeBaseProvider>
  );
};
