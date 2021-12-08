import * as React from "react";
import Home from "./home";
// import { Feather, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
// import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import authStore from "../../stores/authStore";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
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
    case "Outbox":
      return "send";
    case "Wallet":
      return "credit-card-settings-outline";
    case "Talk to Maia":
      return "microphone-settings";
    case "Profile":
      return "account-settings";
    case "Complaints":
      return "alert-circle";
    case "logout":
      return "logout";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  const navigation = useNavigation();
 
  return (

    <DrawerContentScrollView {...props} safeArea>
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
            .
            {/* {authStore.user} */}
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            text for something
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
          <VStack space="5">
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
                  <Text color="gray.700" fontWeight="500">
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
                  <Text color="gray.700" fontWeight="500">
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
                  <Text fontWeight="500" color="gray.700">
                    Past Requests
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {/* <Drawer.Screen name="Outbox" component={Home} /> */}
        <Drawer.Screen name="Wallet" component={Home} />
        <Drawer.Screen name="Talk to Maia" component={Home} />
        {/* <Drawer.Screen name="test" component={Upcoming} /> */}
        <Drawer.Screen name="Profile" component={ProfileUpdate} />
        <Drawer.Screen name="Complaints" component={Home} />
        <Drawer.Screen
          name="logout"
          component={Home}
          onPress={() => authStore.signOut()}
          Signout
        />
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
