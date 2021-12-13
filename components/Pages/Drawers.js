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
import Upcoming from "../Pages/Upcoming";
import Pending from "./Pending";
import Past from "./Past";
import ServiceList from "./ServiceList";
import ServiceNav from "../Navigation/ServiceNav";
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
    case "Profile":
      return "account-settings";
    case "Complaints":
      return "alert-circle";
    case "logout":
      return "logout";
    case "Upcoming Requests":
      return "progress-check";
    case "Pending Requests":
      return "progress-clock";
    case "Past Requests":
      return "progress-close";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props} safeArea>
      {/* <UserAvatar
        // px="3"
        // size="sm"
        // alignItems="left"
        // size={50}
        name="Ghadah Budhhair"
      /> */}
      <IconButton
        icon={<Icon as={Entypo} name="emoji-happy" />}
        borderRadius="full"
        _icon={{
          color: "violet.500",
          bg: "#F1F2F9",
          size: "md",
        }}
        _hover={{
          bg: "orange.600:alpha.20",
        }}
        _pressed={{
          bg: "orange.600:alpha.20",
          _icon: {
            name: "emoji-flirt",
          },
          _ios: {
            _icon: {
              size: "2xl",
            },
          },
        }}
        _ios={{
          _icon: {
            size: "2xl",
          },
        }}
      />

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
                    color={index === props.state.index ? "violet.700" : "black"}
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={index === props.state.index ? "violet.700" : "black"}
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          {/* divider */}
          {/* <VStack space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              My Requests
            </Text>
            <VStack space="3">
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="green.500"
                    size="5"
                    as={<MaterialCommunityIcons name="progress-check" />}
                  />
                  <Text
                    color="gray.700"
                    fontWeight="500"
                    onPress={(event) => {
                      props.navigation.navigate("Upcoming");
                    }}
                  >
                    Upcoming Requests
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="2">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="yellow.500"
                    size="5"
                    as={<MaterialCommunityIcons name="progress-clock" />}
                  />
                  <Text
                    color="gray.700"
                    fontWeight="500"
                    onPress={(event) => {
                      props.navigation.navigate("Pending");
                    }}
                  >
                    Pending Requests
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="progress-close" />}
                  />
                  <Text
                    fontWeight="500"
                    color="gray.700"
                    onPress={(event) => {
                      props.navigation.navigate("Past");
                    }}
                  >
                    Past Requests
                  </Text>
                </HStack>
              </Pressable>
            </VStack> */}
          {/* </VStack> */}
          {/* <DrawerContentScrollView {...props}> */}

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
        <Drawer.Screen name="Profile" component={ProfileUpdate} />
        <Drawer.Screen name="Upcoming Requests" component={Upcoming} />
        <Drawer.Screen name="Pending Requests" component={Pending} />
        <Drawer.Screen name="Past Requests" component={Past} />
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
