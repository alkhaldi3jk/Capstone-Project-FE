import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import Home from "../Pages/home";
import ServiceList from "../Pages/ServiceList";
import Profile from "../user/Profile"
import ServiceDetail from "../Pages/ServiceDetail";



const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (

    <Navigator initialRouteName="ServiceList">
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Home" component={Home} />
    <Screen name="Profile" component={Profile}/>
    <Screen name="ServiceList" component={ServiceList}/>
    <Screen name="ServiceDetail" component={ServiceDetail}/>

    </Navigator>
  );
};

export default RootNavigator;
