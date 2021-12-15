
import React from "react";
import userStore from "../../stores/userStore";
import UserItem from "./UserItem";
import { observer } from "mobx-react-lite";
import { View } from "react-native";

function UserList() {
  const userList = userStore.users.map((user) => (
    <UserItem user={user._id} key={user._id} />
  ));

  return <View>{userList}</View>;
}

export default observer(UserList);

