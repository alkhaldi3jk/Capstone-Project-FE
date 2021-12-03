import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import Home from "../Pages/Home";
import Profile from "../user/Profile"

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Profile">
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Home" component={Home} />
    <Screen name="Profile" component={Profile}/>
    </Navigator>
  );
};

export default RootNavigator;
