import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Badge } from "native-base";
import authStore from "../../stores/authStore";
import requestStore from "../../stores/RequestStore";
import CheckoutList from "./CheckoutList";

function CheckoutButton({navigation}) {
  const handlePress = () => {
    if (authStore.user) navigation.navigate("CheckoutList");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <View>
      <Badge // bg="red.400"
        bg="red.400"
        colorScheme="danger"
        rounded="999px"
        mb={-2}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 12,
        }}
      >
          Badge
      </Badge>

      <Icon name="cart" size={40} mr={4} onPress={handlePress} />
    </View>
  );
}

export default CheckoutButton;
