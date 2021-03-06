import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ServiceList from "../Pages/ServiceList";
import ServiceDetail from "../Pages/ServiceDetail";
import UserList from "../user/UserList";
import { observer } from "mobx-react";
import { Pricing } from "../Pages/Pricing";
import CheckoutList from "../user/CheckoutList";
import CheckoutButton from "../user/CheckoutButton";
import Thankyou from "../user/Thankyou";

const ServiceNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      {/* <Screen
            name="UserList"
            component={UserList}
            options={{
              headerShown: false,
            }}
          /> */}
      <Screen
        name="ServiceList"
        component={ServiceList}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CheckoutList"
        component={CheckoutList}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
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
        name="Thankyou"
        component={Thankyou}
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
