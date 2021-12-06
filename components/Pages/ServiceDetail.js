import { View, Text } from "native-base";
import React from "react";

function ServiceDetail() {
  if (tripStore.isLoading) {
    return <Spinner />;}


    const { service } = route.params;

  return (
    <View>
      <Text> {service.name} </Text>
  
    </View>
  );
}

export default ServiceDetail;
