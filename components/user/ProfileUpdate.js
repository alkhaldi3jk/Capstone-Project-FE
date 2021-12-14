import { observer } from "mobx-react";
import {
  Spinner,
  Button,
  Input,
  FormControl,
  Stack,
  View,
  Heading,
  Text,
  HStack,
  Image,
} from "native-base";
import React, { useState } from "react";
import authStore from "../../stores/authStore";

function ProfileUpdate() {
  const [update, setUpdate] = useState(authStore.user?.profile);

  const handleSubmit = () => {
    authStore.updateProfile(update);
  };

  return (
    <View>
      <Text
        mt="5"
        px="7"
        fontStyle="italic"
        opacity="0.5"
        fontSize="15"
        textAlign="left"
        font-family="lucida grande', tahoma, verdana, arial, sans-serif"
      >
        My Profile
      </Text>
      <Image
        source={require("../../assets/maia_logo_blueish.png")}
        alt="Maia Logo"
        size="120"
        mt="1"
        // mb="158"
        ml="13"
        // mr="-10"
      />
      <Heading
        mt="5"
        mb="1"
        textAlign="left"
        font-family="lucida grande', tahoma, verdana, arial, sans-serif"
        letterSpacing="0.5"
        px="7"
        color="#5F6467"
      >
        {authStore.user?.profile.name}
      </Heading>
      {/* <Text
        textAlign="right"
        font-family="lucida grande', tahoma, verdana, arial, sans-serif"
        letterSpacing="0.5"
        px="6"
        color="#5F6467"
      >
        {authStore.user?.profile.email}
      </Text> */}
      <Text
        textAlign="left"
        font-family="lucida grande', tahoma, verdana, arial, sans-serif"
        letterSpacing="0.5"
        px="7"
        color="#5F6467"
      >
        {authStore.user?.profile.address}
      </Text>
      <Text
        textAlign="left"
        font-family="lucida grande', tahoma, verdana, arial, sans-serif"
        letterSpacing="0.5"
        px="7"
        color="#5F6467"
      >
        {authStore.user?.profile.age}
      </Text>
      <Text
        mt="42"
        px="5"
        fontStyle="italic"
        opacity="0.5"
        fontSize="15"
        textAlign="left"
        font-family="lucida grande', tahoma, verdana, arial, sans-serif"
      >
        Update Profile:
      </Text>
      <FormControl>
        <Stack mx={5}>
          <FormControl.Label mt="3">Name:</FormControl.Label>
          <Input
            p={2}
            mt="0.1"
            placeholder={authStore.user?.profile.name}
            placeholderTextColor="rgb(170, 170, 170)"
            bg="#F1F2F9"
            borderRadius="8"
            borderWidth="2"
            fontSize="14"
            onChangeText={(name) => {
              setUpdate({ ...update, name });
            }}
            // value={authStore.user?.profile.name}
            // isDisabled={true}
          />
          {/* <FormControl.Label mt="5">Email:</FormControl.Label>
          <Input
            p={2}
            mt="0.1"
            placeholder={authStore.user?.email}
            placeholderTextColor="rgb(170, 170, 170)"
            bg="#F1F2F9"
            borderRadius="8"
            borderWidth="2"
            fontSize="14"
            onChangeText={(email) => {
              setUpdate({ ...update, email });
            }}
          /> */}
          <FormControl.Label mt="5">Address</FormControl.Label>
          <Input
            p={2}
            mt="0.1"
            placeholder="E.g. Yarmouk, block 2, street 1, house 22"
            placeholderTextColor="rgb(170, 170, 170)"
            bg="#F1F2F9"
            borderRadius="8"
            borderWidth="2"
            fontSize="14"
            onChangeText={(address) => {
              setUpdate({ ...update, address });
            }}
            defaultValue={authStore.user?.profile.address}
          />
          <FormControl.Label mt="5">Age</FormControl.Label>
          <Input
            p={2}
            mt="0.1"
            placeholder="E.g. 23"
            placeholderTextColor="rgb(170, 170, 170)"
            bg="#F1F2F9"
            borderRadius="8"
            borderWidth="2"
            fontSize="14"
            onChangeText={(age) => {
              setUpdate({ ...update, age });
            }}
            defaultValue={authStore.user?.profile.age}
          />
          {/* <Button
            mt="3"
            borderRadius="8"
            backgroundColor="#4f59b1"
            padding="2"
            size="10"
            width="20"
            textAlign="center"
            overflow="visible"
            marginLeft="260"
            onPress={handleUpdate}
          >
            Update
          </Button> */}

          <Button
            mt="9"
            borderRadius="8"
            backgroundColor="#4f59b1"
            padding="2"
            size="10"
            width="20"
            textAlign="center"
            overflow="visible"
            marginLeft="270"
            onPress={handleSubmit}
          >
            Update
          </Button>
        </Stack>
      </FormControl>
    </View>
  );
}

export default observer(ProfileUpdate);
