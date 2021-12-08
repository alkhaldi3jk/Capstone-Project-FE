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

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="ProfileUpdate">
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Home" component={Home} />
      <Screen name="ServiceList" component={ServiceList} />
      <Screen name="AboutUs" component={AboutUs} />
      {/* <Screen name="Requests" component={Requests} /> */}
      <Screen name="Drawer" component={Drawer} />
      <Screen
        name="ProfileUpdate"
        component={ProfileUpdate}
        // initialParams={{ userProfile: user.profile }}
      />
      <Screen name="Past" component={Past} />
      <Screen name="Upcoming" component={Upcoming} />
      <Screen name="Pending" component={Pending} />

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
