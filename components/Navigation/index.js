import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import ServiceList from "../Pages/ServiceList";
import ServiceDetail from "../Pages/ServiceDetail";
import Home from "../Pages/home";
import { AboutUs } from "../Pages/AboutUs";
import Drawer from "../Pages/Drawers";
import ProfileUpdate from "../user/ProfileUpdate";
import { observer } from "mobx-react";
import BookingForm from "../Pages/BookingForm";
import ToDoList from "../Pages/ToDoList/ToDoList";
import FormExample from "../Pages/FormExample";
import UserAppointment from "../user/UserAppointment";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (

    <Navigator initialRouteName="ServiceDetail">


      <Screen name="ToDoList" component={ToDoList} />

      <Screen name="UserAppointment" component={UserAppointment} />
      
      <Screen name="FormExample" component={FormExample}/>

      <Screen
        name="Signin"
        component={Signin}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ServiceList"
        component={ServiceList}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerShown: false,
        }}
      />
      {/* <Screen name="Requests" component={Requests} /> */}
      <Screen
        name="Drawer"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ProfileUpdate"
        component={ProfileUpdate}
        // initialParams={{ userProfile: user.profile }}
        options={{
          headerShown: false,
        }}
      />
      {/* <Screen name="Past" component={Past} />
      <Screen name="Upcoming" component={Upcoming} />
      <Screen name="Pending" component={Pending} /> */}

      <Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={({ navigation,route }) => {
          const { service } = route.params;
          return {
            name: service.name,
          };
        }}
      />
    </Navigator>
  );
};

export default observer(RootNavigator);
