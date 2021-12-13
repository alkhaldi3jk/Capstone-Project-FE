import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, HStack } from "native-base";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";
import serviceStore from "../../stores/serviceStore";
import { useState } from "react";

const RequestItem = ({ detail }) => {
  const [quantity, setQuantity] = useState(detail);

  const handleAdd = () => {
    serviceStore.addRequest(detail);
    // setQuantity(value);
  };
  return (
    <HStack w="100%" alignItems="center" space="3">
      <Text>let's test</Text>
      <Text>{detail.name}</Text>
      <NumericInput
        valueType="integer"
        totalHeight={30}
        totalWidth={60}
        rounded
        type="up-down"
        value={quantity}
        onChange={(value) => setQuantity(value)}
      />
      <Button onPress={handleAdd}>Add</Button>
    </HStack>
  );
};

export default observer(RequestItem);