import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import ServiceList from "../Pages/ServiceList";
import ServiceDetail from "../Pages/ServiceDetail";
import Home from "../Pages/home";
import Drawer from "../Pages/Drawers";
import ProfileUpdate from "../user/ProfileUpdate";
import { observer } from "mobx-react";
import ToDoList from "../Pages/ToDoList/ToDoList";
import FormExample from "../Pages/FormExample";
import UserAppointment from "../user/UserAppointment";
import authStore from "../../stores/authStore";
import Pricing from "../Pages/Pricing";
import AboutUs from "../Pages/AboutUs";
import CheckoutList from "../user/CheckoutList";
import CheckoutButton from "../user/CheckoutButton";
// import UserItem from "../user/UserItem"

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  // initialRouteName="Home"
  return (
   

    <Navigator initialRouteName="Home">
      {/* <Screen
            name="UserItem"
            component={UserItem}
            options={{
              headerShown: false,
            }}
          /> */}

      {!authStore.user ? (
        <>
          <Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
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
        </>
      ) : (
        <>
          <Screen
            name="Drawer"
            component={Drawer}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="Cart"
            component={CheckoutButton}
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
          {/* <Screen name="Requests" component={Requests} /> */}
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
          <Screen
            name="ProfileUpdate"
            component={ProfileUpdate}
            // initialParams={{ userProfile: user.profile }}
            options={{
              headerShown: false,
            }}
          />

          <Screen
            name="ToDoList"
            component={ToDoList}
            options={{
              headerShown: false,
            }} />

          {/* <Screen name="BookingForm" component={BookingForm} /> */}
          {/* <Screen name="MyDatePicker" component={MyDatePicker} /> */}
        </>
      )}
    </Navigator>
  );
};

export default observer(RootNavigator);