import React from "react";
import { Pressable, Text } from "react-native";
// import { HStack, VStack, Button, Pressable } from "native-base";
import { observer } from "mobx-react";
import { baseURL } from "../../stores/instance";
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Center,
    HStack,
    Stack,
    // Pressable,
    NativeBaseProvider,
  } from "native-base"

const ServiceItem = ({ service, navigation }) => {
  return (
    <Box
    maxW="361"
    // wdith="361"
    height="155"
    rounded="sm"
    overflow="hidden"
    borderColor="coolGray.200"
    borderWidth="1"
    borderRadius="20"
    _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700",
    }}
    _web={{
      shadow: 2,
      borderWidth: 0,
    }}
    _light={{
      backgroundColor: "gray.50",
    }}
    shadow={"3"}
  >
    <Pressable
      onPress={() => {
        navigation.navigate("ServiceDetail", { service: service});
        console.log("click");
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image 
          source={{ uri: service.image }} 
          alt="image"
          opacity="0.75" />
        </AspectRatio>
        <Center
          bg="white"
          _dark={{
            bg: "#f1ff9",
          }}
          _text={{
            color: "black",
            fontWeight: "700",
            fontSize: "20",
            wdith:"36",
            height:"68"
          }}
          position="absolute"
          bottom="10"
          px="3"
          py="1.5"
        >
          {service.name}
        </Center>
      </Box>
    </Pressable>

    <Stack p="4" space={3}>
      <Stack space={2}>
        <Heading 
        size="md" 
        ml="-1"
        width="363"
        height="68"
        >
          {service.title}
        </Heading>
        <Text
          fontSize="xs"
        
          _light={{
            color: "#0000ff",
          }}
          _dark={{
            color: "#0000ff",
          }}
          fontWeight="500"
          ml="-0.5"
          mt="-1"
        >

          {service.subtitle}
        </Text>
      </Stack>
    </Stack>
  </Box>
 
);
};

export default observer(ServiceItem);
