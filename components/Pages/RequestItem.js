import React from "react";
import { Text } from "react-native";
import { Button, HStack, VStack, Icon } from "native-base";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";
import RequestStore from "../../stores/RequestStore"
import { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import DatePicker from "react-native-neat-date-picker";

const RequestItem = ({ option }) => {
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

  const handleAdd = () => {
    RequestStore.addRequest(option)
    // setQuantity(value);

  };

  console.log(option);
  return (
    <HStack w="100%" alignItems="center" space="3">
      <VStack>
        <Text>{option.name}</Text>
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

        <Button>{option.date}</Button>
      </VStack>
    </HStack>
  );
};

export default observer(RequestItem);
