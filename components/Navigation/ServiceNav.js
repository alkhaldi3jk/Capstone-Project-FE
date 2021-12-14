import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ServiceList from "../Pages/ServiceList";
import ServiceDetail from "../Pages/ServiceDetail";

import { observer } from "mobx-react";
import { Pricing } from "../Pages/Pricing";

const ServiceNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="ServiceList">
      <Screen
        name="ServiceList"
        component={ServiceList}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="ServiceDetail"
        component={ServiceDetail}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="Pricing"
        component={Pricing}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default observer(ServiceNavigator);
