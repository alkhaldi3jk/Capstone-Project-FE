import React from "react";
import {
  Button,
  Modal,
  FormControl,
  Input,
  Center
} from "native-base";
import { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import Stores from "../../stores/Stores";

const ProfileUpdateModal = ({Oldprofile}) => {
  const [showModal, setShowModal] = useState(false);

  const [profiles, setProfile] = useState({
    name: profile.name,
    // image: "",
  });


  //   const handleImage = (event) =>
  //     setProfile({ ...profile, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    Stores.updateprofile(profiles);
    // handleClose();
  };


  const [updatedProfile, setUpdatedProfile] = useState({
      name: Oldprofile.name, 
    }
);
const handleUpdate = (event) => {
  event.preventDefault();
  if (Oldprofile) Stores.updateprofile(updatedProfile, Oldprofile._id);
  else Stores.createProduct(updatedProfile);
};
 
  return (
    <Center flex={1} px="3">
      <>
        <Button onPress={() => setShowModal(true)}>Update Profile</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Update your Profile</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Title</FormControl.Label>

                <Input onChangeText={(name) => setUpdatedProfile({ ...Oldprofile, name })} />
              </FormControl>
              <FormControl mt="3">
                <FormControl.Label>Photo</FormControl.Label>
                <Input
                  name="image"
                  type="file"

                  onChangeText={(image) => setUpdatedProfile({ ...profile, image })}
                />
              </FormControl>
            </Modal.Body>

            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button onPress={handleSubmit}>Save</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    </Center>
  );
};

export default observer(ProfileUpdateModal);