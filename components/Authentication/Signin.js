import React from "react";
import authStore from "../../stores/authStore";
import { useState } from "react";

import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  Link,
  Image,
} from "native-base";

function Signin({ navigation }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // navigation.navigate("ServiceList")

  const handleSubmit = () => {
    authStore.signin(user, navigation);
  };

  return (
    <Center>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Image
          source={require("../../assets/maia_logo_blueish.png")}
          alt="Maia Logo"
          size="117"
          mt="20"
          mb="158"
          ml="20"
          mr="-10"
        />
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Sign in
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Welcome to Maia!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              fontWeight="500"
              lineHeight="0.9"
              letterSpacing="-1.5"
              overflow="visible"
              flexWrap="wrap"
              position="relative"
              height="1"
              right="-10"
              zIndex="2"
            >
              Username
            </FormControl.Label>
            <Input
              borderRadius="8"
              borderWidth="2"
              bg="#F1F2F9"
              fontSize="14"
              padding="2"
              placeholder="Type username..."
              placeholderTextColor="rgb(170, 170, 170)"
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              lineHeight="1.4"
              fontWeight="500"
              lineHeight="0.9"
              letterSpacing="-1.5"
              overflow="visible"
              flexWrap="wrap"
              position="relative"
              height="1"
              right="-10"
              zIndex="2"
            >
              Password
            </FormControl.Label>
            <Input
              placeholder="Type password..."
              placeholderTextColor="rgb(170, 170, 170)"
              bg="#F1F2F9"
              borderRadius="8"
              borderWidth="2"
              fontSize="14"
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
            />
          </FormControl>
          <Button
            mt="1"
            borderRadius="8"
            backgroundColor="#4f59b1"
            padding="2"
            size="10"
            width="20"
            textAlign="center"
            overflow="visible"
            marginLeft="195"
            onPress={handleSubmit}
          >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.
            </Text>
            <Link onPress={() => navigation.navigate("Signup")}>Sign Up</Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default Signin;
