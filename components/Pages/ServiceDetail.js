import React from "react";
// import { Image, Text } from "react-native";
import serviceStore from "../../stores/serviceStore";
import { observer } from "mobx-react";
import {
  View,
  Image,
  Text,
  Box,
  Heading,
  AspectRatio,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  ScrollView,
  VStack,
  Button,
  Spinner,
} from "native-base";
import { baseURL } from "../../stores/serviceStore";

function ServiceDetail({ route }) {
  // if (serviceStore.isLoading) {
  //   return <Spinner />;}

  const { service } = route.params;

  return (
    <View>
      <Text> {service.name} </Text>
      {/* <Image
        source={{ uri: service.image }}
        style={{ width: "10", height: "10" }}
      /> */}

      {/* <Text> {service.name} </Text>
      <Box
      maxW="100%"
      rounded="sm"
      overflow="visible"
      borderColor="#faebd7"
      marginLeft="0"
      marginRight="0"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
        backgroundSize:"cover"
      }}
      _web={{
        shadow: 2,
        borderWidth: 40,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
      shadow={"3"}
    >
      </Box>   */}
      <Box>
        <AspectRatio w="auto" ratio={16 / 9}>
          <Image source={{ uri: service.image }} alt="image" />
        </AspectRatio>
        <Center
          _text={{
            color: "#181616",
            fontWeight: "600",
            fontSize: "25px",
            // fontFamily: "normal",
            height: "auto",
            width: "auto",
          }}
          // position="center"
          bottom="0"
          px="3"
          py="1.5"
        >
          {service.name}
        </Center>
      </Box>
      <Box
        bg="white"
        borderRadius="6"
        // padding="3.5"
        alignment="center"
        fontSize="11"
        onHoverIn="1.1"
        fontSize="10"
        fontFamily="normal"
      >
        <Text>About This Service</Text>
      </Box>
      <Box>
        <Text>{service.description}</Text>
      </Box>
      <Box
        bg="white"
        borderRadius="6"
        // padding="3.5"
        alignment="center"
        fontSize="11"
        onHoverIn="1.1"
        fontSize="10"
        fontFamily="normal"
      >
        <Text>Preferences</Text>
      </Box>
    </View>
  );
}

export default ServiceDetail;
