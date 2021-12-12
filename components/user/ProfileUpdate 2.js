import React, { useState } from "react";
import {
  FormControl,
  Input,
  Stack,
  Center,
  NativeBaseProvider,
  Button,
  Avatar,
} from "native-base";
import profileStore from "../../stores/profileStore";
import { observer } from "mobx-react-lite";
import authStore from "../../stores/authStore";
import RequestList from "../Pages/RequestList";
import RequestItem from "../Pages/RequestItem";

const ProfileUpdate = ({ oldProfile }) => {
  const [showModal, setShowModal] = useState(false);

  const [updatedProfile, setUpdatedProfile] = useState({
    // name: oldProfile.name,
  });

  const handleUpdate = (event) => {
    console.log(updatedProfile);

    profileStore.updateProfile(updatedProfile, oldProfile._id);
  };

  return (
    <FormControl>
      <Stack mx={4}>
        <FormControl.Label>Photo</FormControl.Label>
        <Avatar
          name="image"
          type="file"
          onChangeText={(image) =>
            setUpdatedProfile({ ...updatedProfile, image })
          }
        />
        <FormControl.Label>Name</FormControl.Label>
        <Input
          onChangeText={(name) =>
            setUpdatedProfile({ ...updatedProfile, name })
          }
        />
        <Input
          p={2}
          placeholder="Update name.."
          placeholderTextColor="rgb(170, 170, 170)"
          bg="#F1F2F9"
          borderRadius="8"
          borderWidth="2"
          fontSize="14"
        />
<RequestItem/>
        {/* <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage> */}
        <FormControl.Label mt="-0.4">Email ID</FormControl.Label>
        <Input
          p={2}
          mt="0"
          placeholder="Update email.."
          placeholderTextColor="rgb(170, 170, 170)"
          bg="#F1F2F9"
          borderRadius="8"
          borderWidth="2"
          fontSize="14"
        />

        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
        <FormControl.Label mt="-0.4">Mobile</FormControl.Label>
        <Input
          p={2}
          mt="0"
          placeholder="Update number.."
          placeholderTextColor="rgb(170, 170, 170)"
          bg="#F1F2F9"
          borderRadius="8"
          borderWidth="2"
          fontSize="14"
        />
        <FormControl.HelperText>
          We'll keep this between us.
        </FormControl.HelperText>
        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
      </Stack>
      <Button
        mt="2"
        mt="1"
        borderRadius="8"
        backgroundColor="#4f59b1"
        padding="2"
        size="10"
        width="20"
        textAlign="center"
        overflow="visible"
        marginLeft="195"
        onPress={() => {
          setShowModal(false);
        }}
      >
        Cancel
      </Button>
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
        onPress={handleUpdate}
      >
        Save
      </Button>
    </FormControl>
  );
};

export default observer(ProfileUpdate);

// export default () => {
//   return (
//     <NativeBaseProvider>
//       <Center flex={1} px="3">
//         <ProfileUpdateModal />
//       </Center>
//     </NativeBaseProvider>
//   )
// }
