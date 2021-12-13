import React from "react";

import { Image, Text } from "react-native";
import { View, Box, AspectRatio, Center } from "native-base";

import { baseURL } from "../../stores/instance";
import RequestList from "./RequestList";

function ServiceDetail({ route }) {
  const { service } = route.params;

  return (
    <View>

      <Text> {service.name} </Text>

      <Image
        source={{ uri: service.image }}
        style={{ width: 10, height: 10 }}
      />


      <Box>
        <AspectRatio w="auto" ratio={16 / 9}>
          <Image source={{ uri: baseURL + service.image }} alt="image" />
        </AspectRatio>
        <Center
          _text={{
            color: "#181616",
            fontWeight: "600",
            fontSize: "25px",

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
        alignment="center"
        fontSize="11"
        onHoverIn="1.1"

        // fontSize="10"
        fontFamily="normal"

        fontSize="11px"

      >
        <Text>About This Service</Text>
      </Box>
      <Box>
        <Text>{service.description}</Text>
      </Box>
      <Box
        bg="white"
        borderRadius="6"
        alignment="center"
        fontSize="11"
        onHoverIn="1.1"

        fontSize="10"
        fontFamily="normal"
      >
        <Text>Preferences</Text>
        <RequestList options={service.option}/>

      >
        <Text>Preferences</Text>


        <RequestList options={service.option}/>

      </Box>
    </View>
  );
}

export default ServiceDetail;
