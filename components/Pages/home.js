import { Text } from "react-native";
import React from "react";
import { Button } from "native-base";
import authStore from "../../stores/authStore";

function Home({ navigation }) {
  return (
    <div>
      <Text> Maia</Text>
      <Button onPress={() => authStore.signOut(navigation)}>Sign out</Button>
    </div>
  );
}

export default Home;
