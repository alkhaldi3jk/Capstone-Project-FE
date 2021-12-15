import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, NativeBaseProvider, Center } from "native-base";
import requestStore from "../../stores/RequestStore";

const DeleteButton = ({ productId }) => {
  return (
    <View>
      <Button
        _hover={{ bg: "red.500" }}
        _pressed={{ bg: "green.500" }}
        alignSelf="flex-start"
        onPress={() => requestStore.removeRequest(productId)}
      >
        <Text> Delete</Text>
      </Button>
    </View>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({});
