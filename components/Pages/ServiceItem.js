import React from "react";
import { Text, View, Image } from "react-native";
import { HStack, VStack, Button, Pressable } from "native-base";
import { observer } from "mobx-react";

const ServiceItem = ({ service, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ServiceDetail", { service: service });
        console.log("click");
      }}
    >
      <View w="100%" alignItems="center" space="3">
        <Image
          source={{ uri: service.image }}
          style={{ width: "100%", height: 150 }}
        />
        <Text>{service.name}</Text>
      </View>
    </Pressable>
  );
};

export default observer(ServiceItem);
