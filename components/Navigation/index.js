import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import ServiceList from "../Pages/ServiceList";
import Profile from "../user/Profile"
import ServiceDetail from "../Pages/ServiceDetail";
import Home from "../Pages/home";
import { AboutUs } from "../Pages/AboutUs";
import Drawer from"../Pages/Drawer";



const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (


    <Navigator initialRouteName="ServiceList">
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Home" component={Home} />
    <Screen name="Profile" component={Profile}/>
    <Screen name="ServiceList" component={ServiceList}/>
    <Screen name="AboutUs" component={AboutUs}/>
    <Screen name="Drawer" component={Drawer}/>
  
      <Screen name="ServiceDetail" component={ServiceDetail}  options={({ navigation, route }) => {
          const { service } = route.params;
          return {
            name: service.name,
          }}}/>


    </Navigator>
  );
};

export default RootNavigator;
