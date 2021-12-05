import { Text } from "react-native";
import React from "react";
import { Button, View } from "native-base";
import authStore from "../../stores/authStore";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

function Home({ navigation }) {
  const serviceList = serviceStore.services.map((service) => (
    <ServiceItem service={service} key={service._id} navigation={navigation} />
  ));

  return (
    <View>
      <Text> Maia </Text>
      <View>{serviceList}</View>
      <Button onPress={() => authStore.signOut(navigation)}>Sign out</Button>
    </View>
  );
}

export default observer(Home);
