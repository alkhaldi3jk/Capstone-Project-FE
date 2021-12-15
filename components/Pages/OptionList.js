import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OptionItem from "./OptionItem";

const OptionList = ({ options }) => {
  const optionList = options.map((option) => (
    <OptionItem option={option} key={option._id} />
  ));

  return <View>{optionList}</View>;
};

export default observer(OptionList);

const styles = StyleSheet.create({});
