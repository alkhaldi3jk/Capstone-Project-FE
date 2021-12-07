import { View } from "native-base";
import React from "react";
import { Image, Text } from "react-native";
import serviceStore from "../../stores/serviceStore";

function ServiceDetail({ route }) {
  // if (serviceStore.isLoading) {
  //   return <Spinner />;}

  const { service } = route.params;

  return (
    <View>
      <Text> {service.name} </Text>
      <Image
        source={{ uri: service.image }}
        style={{ width: "10", height: "10" }}
      />
    </View>
  );
}

export default ServiceDetail;