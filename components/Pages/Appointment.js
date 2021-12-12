import * as React from 'react'
import { Button, Chip } from 'react-native-paper'
import { TimePickerModal } from 'react-native-paper-dates'
import { DatePickerModal } from 'react-native-paper-dates';
import { View, Text } from "react-native";
  
export default function Appointment() {
  
  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );


  // const [date, setDate] = React.useState<Date
  // const [open, setOpen] = React.useState(false);

  // const onConfirmSingle = React.useCallback(() => {
  //   setOpen(false);
  //   setDate(params.date);
  // },
  // [setOpen, setDate]
  // )

  return (
    <View>
      {/* //  Booking Time  */}
      <Text 
      top= "5"
      position= "absolute"
      alignItems= "center"> Choose Preferences </Text>
      <Chip
        mode="outlined"
        backgroundColor="F1F2F9"
        onPress={() => console.log("Pressed")}
      > Option 1</Chip>
       <Chip
        mode="outlined"
        backgroundColor="F1F2F9"
        onPress={() => console.log("Pressed")}
      > Option 2</Chip>
      <Chip
        mode="outlined"
        backgroundColor="F1F2F9"
        onPress={() => console.log("Pressed")}
      > Option 3</Chip>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12} // default: current hours
        minutes={14} // default: current minutes
        label="Select time" // optional, default 'Select time'
        uppercase={false} // optional, default is true
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale="en" // optional, default is automically detected by your system
      />
      <Button 
      mt="1"
      icon="account-clock" 
      mode="contained"
      color="#4f59b1"
      size="2"

  
     
      onPress={()=> setVisible(true)}>
        Pick a time
      </Button>
    {/* <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
        Pick single date
      </Button>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
        /> */}
        </View>

  )
}

