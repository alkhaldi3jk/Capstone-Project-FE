import { observer } from "mobx-react";
import React from "react";
import requestStore from "../../stores/RequestStore";
import { Button, Center, List, VStack } from "native-base";
import CheckoutItem from "./CheckoutItem";

function CheckoutList({ navigation }) {
  const optionList = requestStore.options.map((option) => (
    <CheckoutItem option={option} key={option._id} navigation={navigation} />
  ));
  return (
    <Center>
      <VStack space="5">{optionList}</VStack>
      <Button onPress={requestStore.checkout}>Checkout</Button>
    </Center>
  );
}

export default observer(CheckoutList);
