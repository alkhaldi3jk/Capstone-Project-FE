import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text, Center } from 'native-base';
import Constants from 'expo-constants';

const FirstRoute = () => <Center flex={1}>Past</Center>;

const SecondRoute = () => <Center flex={1}>Upcoming</Center>;

// const ThirdRoute = () => <Center flex={1}>This is Tab 3</Center>;

// const FourthRoute = () => <Center flex={1}>This is Tab 4</Center>;

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
//   third: ThirdRoute,
//   fourth: FourthRoute,
});

export default function UserAppointment() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Past' },
    { key: 'second', title: 'Upcoming' },
    // { key: 'third', title: 'Tab 3' },
    // { key: 'fourth', title: 'Tab 4' },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? '#1f2937' : '#a1a1aa';
          const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              >
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}>
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: StatusBar.currentHeight }}
      />
    </NativeBaseProvider>
  );
}