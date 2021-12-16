import { View, Text, Box, Heading, Center, Link } from "native-base";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

function Thankyou({ navigation }) {
  return (
    <Center>
      <Box p="1" py="80" w="90%" maxW="303" h="100%">
        <AnimatedLottieView
          source={require("../../assets/checkout.json")}
          loop
          autoPlay
          marginTop={-130}
          marginBottom={-110}
        />
        <Heading
          mt="83"
          px="20"
          size="md"
          fontWeight="400"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Request sent!
        </Heading>
        <Heading
          px="10"
          mt="13"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Thank you for choosing Maia!
        </Heading>
        <Link
          opacity="0.8"
          px="20"
          mt="93"
          onPress={() => navigation.navigate("ServiceList")}
        >
          Services & Requests
        </Link>
      </Box>
    </Center>
  );
}

export default Thankyou;
