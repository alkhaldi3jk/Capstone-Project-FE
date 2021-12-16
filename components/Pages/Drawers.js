import * as React from "react";
import Home from "./home";
// import UserAvatar from "react-native-user-avatar";
import { NavigationContainer } from "@react-navigation/native";
// import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import authStore from "../../stores/authStore";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  Entypo,
  FontAwesome5,
  Clarity,
  Feather,
} from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  IconButton,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";
import ProfileUpdate from "../user/ProfileUpdate";
import ServiceList from "./ServiceList";
import ServiceNav from "../Navigation/ServiceNav";
import ToDoList from "./ToDoList/ToDoList";
import CheckoutButton from "../user/CheckoutButton";
import CheckoutList from "../user/CheckoutList";
import UserAppointment from "../user/UserAppointment";

const Drawer = createDrawerNavigator();
function Drawers(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "Inbox":
      return "email";
    case "Home":
      return "send";
    case "Wallet":
      return "credit-card-settings-outline";
    case "Services & Requests":
      return "microphone-settings";
    case "My Profile":
      return "account-settings";
    case "Complaints":
      return "alert-circle";
    case "logout":
      return "logout";
    case "Upcoming Requests":
      return "progress-clock";
    case "My To-Do's":
      return "progress-check";
    case "Checkout":
      return "cart";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props} safeArea>


      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Hi {authStore.user?.username}
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            Let us help you
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(200,210,254,255)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={index === props.state.index ? "#4f59b1" : "black"}
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={index === props.state.index ? "#4f59b1" : "black"}
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <Button
            mt="1"
            borderRadius="8"
            backgroundColor="#4f59b1"
            padding="2"
            size="10"
            width="20"
            textAlign="center"
            overflow="visible"
            marginLeft="180"
            label="Sign Out"
            onPress={() => authStore.signOut(props.navigation)}
          >
            Sign out
          </Button>
          {/* </DrawerContentScrollView> */}
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Box flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => (
          <CustomDrawerContent
            {...props}
            options={{
              headerShown: false,
            }}
          />
        )}
      >
        {/* <Drawer.Screen name="Home" component={Home} /> */}
        <Drawer.Screen name="Services & Requests" component={ServiceNav} />
        <Drawer.Screen name="My Profile" component={ProfileUpdate} />
        <Drawer.Screen name="Upcoming Requests" component={UserAppointment} />
        <Drawer.Screen name="My To-Do's" component={ToDoList} />
        {/* <Drawer.Screen name="Past Requests" component={Past} /> */}
        {/* <Drawer.Screen name="Upcoming Requests" component={Upcoming} />
        <Drawer.Screen name="Pending Requests" component={Pending} /> */}
        {/* <Drawer.Screen name="Past Requests" component={Past} /> */}
        <Drawer.Screen name="Checkout" component={CheckoutList} />

        {/* <Drawer.Screen label="logout" onPress={() => authStore.signOut()} /> */}
      </Drawer.Navigator>
    </Box>
  );
}

// export default observer(Drawers);

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
