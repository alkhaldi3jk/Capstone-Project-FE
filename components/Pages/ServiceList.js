import React from "react";
// import { Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import serviceStore from "../../stores/serviceStore";
import authStore from "../../stores/authStore";
import ServiceItem from "./ServiceItem";
import { observer } from "mobx-react";
import { Pressable, View } from "react-native";
import { baseURL } from "../../stores/instance";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  ScrollView,
  NativeBaseProvider,
} from "native-base";

const ServiceList = ({ navigation }) => {
  const serviceList = serviceStore.services.map((service) => (
    <ServiceItem service={service} key={service._id} navigation={navigation} />
  ));


  return (
    <ScrollView
    vertical={true} 
    >
   {serviceList} 
    </ScrollView>
  )
  };


export default observer(ServiceList);
