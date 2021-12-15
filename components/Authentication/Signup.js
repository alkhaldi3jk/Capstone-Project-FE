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

function Signup({ navigation }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    profile: {
      name: "",
      address: "",
      age: "",
    },
  });

  const handleSubmit = async () => {
    await authStore.signup(user, navigation);
  };

  return (
    <Center>
      <Box safeArea p="2" py="62" w="90%" maxW="290">
        <Image
          source={require("../../assets/maia_logo_blueish.png")}
          alt="Maia Logo"
          size="117"
          mt="20"
          mb="16"
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
          Sign up
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
              // borderColor="rgba(0, 0, 0, 0)"
              // color="rgb(51, 51, 51)"
              fontSize="14"
              // maxLength="10"
              // lineHeight="1.4"
              padding="2"
              placeholder="Type username..."
              placeholderTextColor="rgb(170, 170, 170)"
              // FormControl="rgb(51, 51, 51)"
              // color="#333333"
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
              Email
            </FormControl.Label>
            <Input
              placeholder="Type email..."
              placeholderTextColor="rgb(170, 170, 170)"
              bg="#F1F2F9"
              borderRadius="8"
              borderWidth="2"
              fontSize="14"
              type="email"
              onChangeText={(email) => setUser({ ...user, email })}
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
          {/* <FormControl>
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
              Address
            </FormControl.Label>
            <Input
              placeholder="Area, block, street, house..."
              placeholderTextColor="rgb(170, 170, 170)"
              bg="#F1F2F9"
              borderRadius="8"
              borderWidth="2"
              fontSize="14"
              type="address"
              onChangeText={(address) => setUser({ ...user.profile, address })}
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
              Age
            </FormControl.Label>
            <Input
              placeholder="Type age..."
              placeholderTextColor="rgb(170, 170, 170)"
              bg="#F1F2F9"
              borderRadius="8"
              borderWidth="2"
              fontSize="14"
              type="age"
              onChangeText={(age) => setUser({ ...user.profile, age })}
            />
          </FormControl> */}
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
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm already a user.
            </Text>
            <Link onPress={() => navigation.navigate("Signin")}>Sign In</Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}

export default Signup;
