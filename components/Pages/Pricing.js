import React from "react"
import {
  Link,
  Text,
  Box,
  Flex,
  HStack,
  Spacer,
  Heading,
  Center,
  Divider,
  Icon,
  NativeBaseProvider,
} from "native-base"
import { Ionicons, Feather, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Fontisto, Entypo } from "@expo/vector-icons";
export const Pricing = () => {
  return (
      <Center>
      <Heading top="20"> Maia Service Pricing </Heading>
      <Text> WE ARE COMPROMISEDOF TWO TYPES OF SERVICES*
      </Text>
      <Flex direction="row" p="4">
      <Text>Maia Butlers by Maia </Text>
      <Divider bg="indigo.500" thickness="2" mx="2" orientation="vertical" />
      <Text>Services Provided by Maia-approved local vendors</Text>
      </Flex>
      <Box bg="cyan.700" p="5" rounded="8" flexShrink="1">
        <HStack alignItems="flex-start">
          <Text fontSize="xs" color="cyan.50" fontWeight="medium">
            Maia Pricing
          </Text>
          <Spacer />
        </HStack>
        <Heading color="cyan.50" mt="2" fontWeight="medium" fontSize="lg">
          Maia Butlers
        </Heading>
        <Icon
                as={<MaterialCommunityIcons name="flower-tulip" />}
                size="sm"
                color="black"
              />
              <Icon
                as={<MaterialIcons name="local-laundry-service" />}
                size="sm"
                color="black"
              />
              <Icon
                as={<Feather name="package" />}
                size="sm"
                color="black"
              />
           
        <Text mt="1" fontSize="sm" color="white">
          Services provided by your personal Maia on your daily/weekly service day. These services have a modest 5% service charge, plus includes the cost of your goods.
        </Text>
        <Text mt="1" fontSize="sm" color="white" bold>
            Ex: flowers, groceries, laundry, dry cleaning, package pickup and dropoff, etc.        
            </Text>

            <Heading color="cyan.50" mt="2" fontWeight="medium" fontSize="lg">
          Services Provided by Maia-approved local vendors
        </Heading>
        <Icon
                as={<MaterialIcons name="dry-cleaning" />}
                size="sm"
                color="black"
              />
              <Icon
                as={<Entypo name="tools" />}
                size="sm"
                color="black"
              />
              <Icon
                as={<MaterialIcons name="local-car-wash" />}
                size="sm"
                color="black"
              />
           
        <Text mt="1" fontSize="sm" color="white">
          Services provided by Maia-approved local vendors, and can be overseen by your personal Maia. These costs vary by area, and Maia takes full responsibility for the quality of these services.
        </Text>
        <Text mt="1" fontSize="sm" color="white" bold>
            Ex: home cleaning, handman, car washes, etc. </Text>
        <Flex></Flex>
        
      </Box>
    </Center>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Pricing />
      </Center>
    </NativeBaseProvider>
  )
}
