import React from "react";
import authStore from "../../stores/authStore";
import serviceStore from "../../stores/serviceStore";
import ServiceItem from "./ServiceItem";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";
import { Text } from "react-native";
import {
  Heading,
  Icon,
  Button,
  Flex,
  Image,
  Center,
  NativeBaseProvider,
  View,
  Box,
  ScrollView,
} from "native-base";
import { Ionicons, Feather } from "@expo/vector-icons";

function Home({ navigation }) {
  return (
    <ScrollView vertical={true}>
      <Center flex={1} px="6">
        <View>
          <Heading
            fontSize="60"
            overflow="hidden"
            fontWeight="700"
            // mt="-80"
            mt="25"
            height="90"
            width="400"
            color="#000000"
            // fontFamily="Epilogue"
            fontSize="xl"
            letterSpacing="0"
            textAlign="center"
            line-height="25"
            // fontFamily="Epilogue-seminold"
          >
            Welcome home, we're Maia.
          </Heading>
          <Heading
            mt="-10"
            height="45"
            fontWeight="400"
            overflow="hidden"
            wordWrap="break-word"
            color="#000000"
            fontSize="16"
            textAlign="center"
            mx="6"
            letterSpacing="0"
            lineHeight="22"
            fontFamily="Epilogue"
          >
            The first app-based personal assistant designed for the future of
            living.
          </Heading>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1627662166825-a860471632e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80",
            }}
            alt="Maia Home"
            size="2xl"
            resizeMode="cover"
            borderRadius="40"
            // height="271"
            // width="210"
            width="410"
            height="471"
            opacity="0.88"
            // bottom="-320"
            bottom="-50"
            left="7"
          />
          <Button
            leftIcon={<Icon as={Feather} name="user" size="sm" />}
            bg="white"
            borderRadius="6"
            // padding="3.5"
            alignment="center"
            fontSize="11"
            onHoverIn="1.1"
            padding="2"
            textAlign="center"
            paddingRight="50"
            paddingLeft="50"
            overflow="visible"
            marginLeft="40"
            overflow="visible"
            margin="-3"
            alignItems="center"
            marginLeft="50"
            marginRight="50" // centers the button
            onPress={() => navigation.replace("Signin")}
          >
            Sign in
          </Button>
        </View>
        <Image
          source={require("../../assets/maia_logo.png")}
          alt="Maia Logo"
          size="sm"
          //   marginTop="-1240"
          margin="33"
          size="100"
        />
      </Center>
    </ScrollView>
  );
}

export default observer(Home);

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         <Home />
//       </Center>
//     </NativeBaseProvider>
//   );
// };
