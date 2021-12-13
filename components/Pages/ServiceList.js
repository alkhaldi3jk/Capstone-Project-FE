import React from "react";
// import { Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import serviceStore from "../../stores/serviceStore";
import authStore from "../../stores/authStore";
import ServiceItem from "./ServiceItem";
import { observer } from "mobx-react";
import { Pressable, View } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Center,
  HStack,
  Stack,
  ScrollView,
  NativeBaseProvider,
  Button,
} from "native-base";

const ServiceList = ({ navigation }) => {
  const serviceList = serviceStore.services.map((service) => (
    <ServiceItem service={service} key={service._id} navigation={navigation} />
  ));

  return (
    <ScrollView vertical={true}>
      <Center>
        <HStack space="2.5" mt="4" maxW="100%" ratio={16 / 9}>
          <Stack
            maxW="100%"
            direction="column"
            marginLeft="0"
            marginRight="0"
            // borderWidth="0.5"
            mb="2.5"
            mt="1.5"
            space={5}
            // rounded="sm"
            // shadow={"1"}
          >
            {serviceList}
          </Stack>
        </HStack>
      </Center>
    </ScrollView>
  );
};

export default observer(ServiceList);
