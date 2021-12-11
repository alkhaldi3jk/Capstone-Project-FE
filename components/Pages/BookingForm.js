import React from "react";
import { Chip } from "react-native-paper";
import { View, Text } from "react-native";

function BookingForm() {
  return (
    <View>
    {/* //   style={{ */}
    {/* //     margin: 7,
    //     flexWrap: "wrap",
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     padding: 20
        
    //   }}
    // >
    //  Availability 
    
     //  Booking Time */}
      <Text 
      top= "5"
      position= "absolute"
      alignItems= "center"> Pick A Time </Text>
      <Chip
        mode="outlined"
        selectedColor="#4f59B1"
        margin= "7"
        flexWrap= "wrap"
        flexDirection= 'row'
        justifyContent= 'space-between'
        padding= "20"
        size="2"
        onPress={() => console.log("Pressed")}
      >
        09:00
      </Chip>
      <Chip
        mode="outlined"
        backgroundColor="F1F2F9"
        onPress={() => console.log("Pressed")}
      >
        09:30
      </Chip>
      <Chip
        mode="outlined"
        backgroundColor="F1F2F9"
        onPress={() => console.log("Pressed")}
      >
        10:00
      </Chip>
      <Chip
        mode="outlined"
        backgroundColor="F1F2F9"
        onPress={() => console.log("Pressed")}
      >
        10:30
      </Chip>
      <Chip
        mode="outlined"
        backgroundColor="F1F2F9"
        onPress={() => console.log("Pressed")}
      >
        11:00
      </Chip>
      <Chip
        mode="outlined"
        backgroundColor="F1F2F9"
        onPress={() => console.log("Pressed")}
      >
        11:30
      </Chip>

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

     
    </View>
  );
}

export default BookingForm;
