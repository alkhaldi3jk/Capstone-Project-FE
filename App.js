import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import Navigation from "./components/Navigation";
import { StyleSheet } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import React from "react";

// import authStore from "./stores/authStore";
// import MyDrawer from "./components/SideBar/MyDrawer";

// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
// } from "@react-navigation/drawer";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import {
//   NativeBaseProvider,
//   Button,
//   Box,
//   HamburgerIcon,
//   Pressable,
//   Heading,
//   VStack,
//   Text,
//   Center,
//   HStack,
//   Divider,
//   Icon,
// } from "native-base";
// import Profile from "./components/user/Profile";
// import home from "./components/Pages/home";

// const Drawer = createDrawerNavigator();
// function Component(props) {
//   return (
//     <Center>
//       <Text mt="12" fontSize="18">
//         This is {props.route.name} page.
//       </Text>
//     </Center>
//   );
// }

// const getIcon = (screenName) => {
//   switch (screenName) {
//     case "Inbox":
//       return "email";
//     case "Outbox":
//       return "send";
//     case "Favorites":
//       return "heart";
//     case "Archive":
//       return "archive";
//     case "Trash":
//       return "trash-can";
//     case "Spam":
//       return "alert-circle";
//     default:
//       return undefined;
//   }
// };

// function CustomDrawerContent(props, navigation) {
//   return (
//     <DrawerContentScrollView {...props} safeArea>
//       <VStack space="6" my="2" mx="1">
//         <Box px="4">
//           <Text bold color="gray.700">
//             Maia
//           </Text>
//           <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
//             salmashaan@gmail.com
//           </Text>
//         </Box>
//         <VStack divider={<Divider />} space="4">
//           <VStack space="3">
//             {props.state.routeNames.map((name, index) => (
//               <Pressable
//                 px="5"
//                 py="3"
//                 rounded="md"
//                 bg={
//                   index === props.state.index
//                     ? "rgba(6, 182, 212, 0.1)"
//                     : "transparent"
//                 }
//                 onPress={(event) => {
//                   props.navigation.navigate(name);
//                 }}
//               >
//                 <HStack space="7" alignItems="center">
//                   <Icon
//                     color={
//                       index === props.state.index ? "primary.500" : "gray.500"
//                     }
//                     size="5"
//                     as={<MaterialCommunityIcons name={getIcon(name)} />}
//                   />
//                   <Text
//                     fontWeight="500"
//                     color={
//                       index === props.state.index ? "primary.500" : "gray.700"
//                     }
//                   >
//                     {name}
//                   </Text>
//                 </HStack>
//               </Pressable>
//             ))}

//             <Button onPress={() => authStore.signOut()}>Sign out</Button>
//           </VStack>
//         </VStack>
//       </VStack>
//     </DrawerContentScrollView>
//   );
// }
// function MyDrawer() {
//   return (
//     <Box safeArea flex={1}>
//       <Drawer.Navigator
//         drawerContent={(props) => <CustomDrawerContent {...props} />}
//       >
//         <Drawer.Screen name="Home" component={home} />
//         <Drawer.Screen name="Profile" component={Profile} />
//       </Drawer.Navigator>
//     </Box>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
        {/* <MyDrawer /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
