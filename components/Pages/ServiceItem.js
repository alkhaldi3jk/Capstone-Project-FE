import React from "react";
import { Pressable } from "react-native";
// import { HStack, VStack, Button, Pressable } from "native-base";
import { observer } from "mobx-react";
import { baseURL } from "../../stores/instance";
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
    // Pressable,
    NativeBaseProvider,
  } from "native-base"

const ServiceItem = ({ service, navigation }) => {
  return (
  <Box
          width="361"
          height="160"
          borderRadius="20"
          overflow="visible"
          opacity="0.75"
        //   borderColor="coolGray.200"
        //   borderWidth="20"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
        <Pressable
          onPress={() => {
            navigation.navigate("ServiceDetail", { service: service });
            console.log("click");
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{ uri: baseURL + service.image }}
                alt="image"
                borderRadius="20"
                />
                </AspectRatio>
                <Center
                // bg="violet.500"
                _dark={{
                //   bg: "violet.400",
                  
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "25",
                }}
                position="absolute"
                // bottom="0"
                px="3"
                py="1.5"
                // paddingLeft="50"
                alignSelf="center"
                width="363"
                height="68"
                overflow="hidden"
                fontWeight="500"
                color= "#fbf9f9"
                fontSize= "30"
                letterSpacing= "-1.5"
                lineHeight= "0.9"
                bottom="0"
                right="35"
                
              >
                {service.name}
              </Center> 
              <Center
                // bg="violet.500"
                _dark={{
                //   bg: "violet.400",
                  
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "15",
                }}
                position="absolute"
                // bottom="0"
                px="3"
                py="1.5"
                // paddingLeft="50"
                alignSelf="center"
                width="366"
                height="70"
                overflow="hidden"
                fontWeight="500"
                color= "#fbf9f9"
                fontSize= "30"
                letterSpacing= "-1.5"
                lineHeight= "0.9"
                bottom="-20"
                right="35"
                color= "#ffffff"
                
              >
                Add some positivty in your home
              </Center> 
          </Box>
          </Pressable>
          {/* <Heading
            width="363"
            height="68"
            overflow="hidden"
            > Hi </Heading> */}
          
           
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
               
              </HStack>
            </HStack>
          
        </Box>
      );
    };

export default observer(ServiceItem);

