import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import ServiceList from "../Pages/ServiceList";
import ServiceDetail from "../Pages/ServiceDetail";
import Home from "../Pages/home";
import { AboutUs } from "../Pages/AboutUs";
import Drawer from "../Pages/Drawers";
import Requests from "../Pages/Requests";
import ProfileUpdate from "../user/ProfileUpdate";
import Upcoming from "../Pages/Upcoming";
import Past from "../Pages/Past";
import Pending from "../Pages/Pending";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import BookingForm from "../Pages/BookingForm";
import Appointment from "../Pages/Appointment";
import Booking from "../Pages/Booking";
import ToDoList from "../Pages/ToDoList/ToDoList";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="BookingForm">

      <Screen name="BookingForm" component={BookingForm} />
      <Screen name="Appointment" component={Appointment} />
      <Screen name="Booking" component={Booking} />
      <Screen name="ToDoList" component={ToDoList} />

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
        options={({ navigation, route }) => {
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
