import React from "react";
import { View,  Button, StyleSheet } from "react-native";
import { Text } from "native-base";
import { useState } from "react";
import DatePicker from "react-native-neat-date-picker";


function BookingForm() {
  // const [chosenDate, setChosenDate] = useState(new Date());

  const colorOptions = {
    headerColor:"#4F59B1",
    backgroundColor:'#FFF8F0',
    confirmButtonColor:"#4F59B1",
    weekDaysColor:"#4F59B1",
    selectedDateBackgroundColor:"#4F59B1"
  }

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
    <View>
       <Button
       color="#4f59b1"
       mt="1"
       backgroundColor="#4f59b1"
       size="2"
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
      </View>


  );
}

export default BookingForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

});
