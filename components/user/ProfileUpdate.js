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
} from "native-base";
import React, { useState } from "react";
import authStore from "../../stores/authStore";

function ProfileUpdate() {
  const [update, setUpdate] = useState(authStore.user?.profile);

  const handleSubmit = () => {
    authStore.updateProfile(update);
  };

  // const handleUpdate=()=>{

  //

  return (
    <View>
      <Heading>{authStore.user?.profile.name}</Heading>
      <FormControl>
        <Stack mx={5}>
          <FormControl.Label mt="100">Name</FormControl.Label>
          <Input
            p={2}
            mt="0.1"
            placeholder="Update name.."
            placeholderTextColor="rgb(170, 170, 170)"
            bg="#F1F2F9"
            borderRadius="8"
            borderWidth="2"
            fontSize="14"
            onChangeText={(name) => {
              setUpdate({ ...update, name });
            }}
            value={authStore.user?.profile.name}
            isDisabled={true}
          />
          <FormControl.Label mt="5">Email ID</FormControl.Label>
          <Input
            p={2}
            mt="0.1"
            placeholder="Update email.."
            placeholderTextColor="rgb(170, 170, 170)"
            bg="#F1F2F9"
            borderRadius="8"
            borderWidth="2"
            fontSize="14"
            onChangeText={(email) => {
              setUpdate({ ...update, email });
            }}
            defaultValue={authStore.user?.profile.email}
            isDisabled={true}
          />

          <FormControl.Label mt="5">Age</FormControl.Label>
          <Input
            p={2}
            mt="0.1"
            placeholder="Update age.."
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
            mt="3"
            borderRadius="8"
            backgroundColor="#4f59b1"
            padding="2"
            size="10"
            width="20"
            textAlign="center"
            overflow="visible"
            marginLeft="260"
            onPress={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </FormControl>
    </View>
  );
}

export default observer(ProfileUpdate);
