import React from "react";
import { useState } from "react";
import {
  VStack,
  // CheckIcon,
  Center,
  Heading,
  NativeBaseProvider,
  Button,
  Icon,
  Text,
  FormControl,
  CheckIcon,
  WarningOutlineIcon,
  Select,
} from "native-base";
import { Ionicons, Feather, FontAwesome5, Fontisto } from "@expo/vector-icons";
import DatePicker from "react-native-neat-date-picker";

export function FormExample() {
  const colorOptions = {
    headerColor: "#4F59B1",
    backgroundColor: "#FFF8F0",
    confirmButtonColor: "#4F59B1",
    weekDaysColor: "#4F59B1",
    selectedDateBackgroundColor: "#4F59B1",
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };

  const onConfirm = (date) => {
    // You should close the modal in here
    setShowDatePicker(false);

    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate());
  };

  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10" color="black">
        Appointment Booking
      </Heading>
      <Text>About Service</Text>
      <Center w="80" h="20" bg="white" rounded="md" shadow={3} />
      <FormControl isRequired isInvalid>
        <FormControl.Label>Choose service option</FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Choose Option"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "white",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="Home cleaning" value="ux" />
        </Select>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid>
        <FormControl.Label>Pick a day</FormControl.Label>
        <Button
          leftIcon={<Icon as={Fontisto} name="date" size="sm" />}
          color="#4f59b1"
          mt="1"
          backgroundColor="#4f59b1"
          size="20"
          title={"Pick a date"}
          onPress={openDatePicker}
        />
        <DatePicker
          isVisible={showDatePicker}
          mode={"single"}
          onCancel={onCancel}
          onConfirm={onConfirm}
          color="F1F2F9"
          backgroundColor="#4F59B1"
          headerColor="#4f59b1"
          colorOptions={colorOptions}
        />
      </FormControl>

      {/* <Select
          minWidth="200"
          accessibilityLabel="Choose Date"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "white",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
        <Select.Item label="Date" value="ux" />
        </Select> */}

      <FormControl isRequired isInvalid>
        <FormControl.Label>Pick a time</FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Choose Time"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "white",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="08:30" value="ux" />
        </Select>
        {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Please make a selection!
        </FormControl.ErrorMessage> */}
      </FormControl>
      <Button
        leftIcon={<Icon as={FontAwesome5} name="concierge-bell" size="sm" />}
        bg="white"
        // TouchableHighlight="#4f59b1"
        activeOpacity="#4f59b1"
        color="#4f59b1"
        borderRadius="6"
        bottom="-50"
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
        onPress={() => navigation.navigate("Home")}
      >
        Request
      </Button>
    </VStack>
  );
}

// export default FormExample;

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <FormExample />
      </Center>
    </NativeBaseProvider>
  );
};
