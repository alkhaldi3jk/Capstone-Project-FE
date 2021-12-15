import React from "react";
import { Button, Text} from "react-native";
import requestStore from "../../stores/RequestStore";
import DeleteButton from "./DeleteButton";

function CheckoutItem({ option }) {
  const handelAdd = () => {
    requestStore.addRequest(option.name);
  };
  return (
    <div>
      <Text>{option.name}</Text>
      <Button onPress={handelAdd}>Request</Button>
      <DeleteButton optionId={option._id} />
    </div>
  );
}

export default CheckoutItem;
