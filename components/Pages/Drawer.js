import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, {useAnimatedProps, useAnimatedStyle} from 'react-native-reanimated';
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from 'native-base';




function Drawer (props) {
    return (
      <DrawerContentScrollView {...props} safeArea>
        <VStack space="6" my="2" mx="1">
          <Box px="4">
            <Text bold color="gray.700">
              Mail
            </Text>
            <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
              john_doe@gmail.com
            </Text>
          </Box>
          {/* <VStack divider={<Divider />} space="4">
            <VStack space="3">
              {props.state.routeNames.map((name, index) => (
                <Pressable
                  px="5"
                  py="3"
                  rounded="md"
                  bg={
                    index === props.state.index
                      ? 'rgba(6, 182, 212, 0.1)'
                      : 'transparent'
                  }
                  onPress={(event) => {
                    props.navigation.navigate(name);
                  }}>
                  <HStack space="7" alignItems="center">
                    <Icon
                      color={
                        index === props.state.index ? 'primary.500' : 'gray.500'
                      }
                      size="5"
                      as={<MaterialCommunityIcons name={getIcon(name)} />}
                    />
                    <Text
                      fontWeight="500"
                      color={
                        index === props.state.index ? 'primary.500' : 'gray.700'
                      }>
                      {name}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack> */}
            <VStack space="5">
              <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
                Labels
              </Text>
              <VStack space="3">
                <Pressable px="5" py="3">
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialCommunityIcons name="bookmark" />}
                    />
                    <Text color="gray.700" fontWeight="500">
                      Family
                    </Text>
                  </HStack>
                </Pressable>
                <Pressable px="5" py="2">
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialCommunityIcons name="bookmark" />}
                    />
                    <Text color="gray.700" fontWeight="500">
                      Friends
                    </Text>
                  </HStack>
                </Pressable>
                <Pressable px="5" py="3">
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialCommunityIcons name="bookmark" />}
                    />
                    <Text fontWeight="500" color="gray.700">
                      Work
                    </Text>
                  </HStack>
                </Pressable>
              </VStack>
            </VStack>
          </VStack>
        {/* </VStack> */}
      </DrawerContentScrollView>
    );
  }

  export default Drawer;

//   export default function App() {
//     return (
//       <NavigationContainer>
//         <NativeBaseProvider>
//           <Drawer />
//         </NativeBaseProvider>
//       </NavigationContainer>
//     );
//   }