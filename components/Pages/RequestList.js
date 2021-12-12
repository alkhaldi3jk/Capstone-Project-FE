import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RequestItem from "./RequestItem";

const RequestList = ({ detail }) => {
  const RequestList = details.map((detail) => (
    <RequestItem detail={detail} key={detail._id} />
  ));
  
  return <View>{RequestList}</View>;
};

export default observer(RequestList);

const styles = StyleSheet.create({});