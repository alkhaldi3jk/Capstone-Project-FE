import React, { useState, useEffect } from "react";
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
import * as ImagePicker from "expo-image-picker";

const ProfileUpdate = ({route}) => {
  const [showModal, setShowModal] = useState(false);

  const [updatedProfile, setUpdatedProfile] = useState({
    name: authStore.user,
  });

  const handleUpdate = (event) => {
    console.log(updatedProfile);
    authStore.updateProfile(oldProfile);
  };

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],

        quality: 1,
      });

      if (!result.cancelled) {
        const localUri = result.uri;
        const filename = localUri.split("/").pop();
        const match = /.(\w+)$/.exec(filename);
        const image = {
          uri: localUri,
          name: filename,
          type: `match ? image/${match[1]} : image`,
        };
        setUpdatedProfile({ ...profile, image: image });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl>
      <Stack mx={4}>
        <FormControl.Label>Photo</FormControl.Label>
        <Avatar
          name="image"
          type="file"
          onChangeText={(image) => setUpdatedProfile({ ...oldProfile.image, image })}
        />
        <Button onPress={pickImage}> Change Image </Button>
        <FormControl.Label>Name</FormControl.Label>
        <Input
          onChangeText={(name) => setUpdatedProfile({ ...oldProfile.name, name })}
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
        mt="1"
        borderRadius="8"
        backgroundColor="#4f59b1"
        padding="2"
        size="10"
        width="20"
        textAlign="center"
        overflow="visible"
        marginLeft="295"
        onPress={handleUpdate}
      >
        Save
      </Button>
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
        marginLeft="295"
        onPress={() => {
          setShowModal(false);
        }}
      >
        Cancel
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
