import React from "react"
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base"

export const ServiceList = () => {
    const navigation = useNavigation();
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
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1531058240690-006c446962d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            }}
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
            Flowers for your Home
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
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center padding="5" px="1">
        <ServiceList />
      </Center>
    </NativeBaseProvider>
  )
}