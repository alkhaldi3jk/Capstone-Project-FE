import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RequestItem from "./RequestItem";

const RequestList = ({options}) => {
  const requestList = options.map((option) => (
    <RequestItem option={option} key={option._id} />
  ));


  return <View>{requestList}</View>;
};

export default observer(RequestList);

const styles = StyleSheet.create({});