import React from "react";
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
  ScrollView,
  View,
  Image,
} from "native-base";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
  Entypo,
} from "@expo/vector-icons";

export const Pricing = () => {
  return (
    <ScrollView vertical={true}>
      <View>
        <Center>
          <Heading
            top="3"
            fontWeight="300"
            font-family="lucida grande', tahoma, verdana, arial, sans-serif"
          >
            Maia Service Pricing
          </Heading>

          <Text
            mt="3"
            fontStyle="italic"
            opacity="0.5"
            fontSize="12"
            font-family="lucida grande', tahoma, verdana, arial, sans-serif"
          >
            we are compromised of two types of services
          </Text>
          <Image
            source={require("../../assets/maia_logo_purple.png")}
            alt="Maia Logo"
            size="77"
            mt="3"
            mb="4"
          />
          <Text font-family="lucida grande', tahoma, verdana, arial, sans-serif">
            Maia Butlers by Maia
          </Text>
          <Divider
            bg="#B8B3BE"
            thickness="2"
            mx="2"
            my="2"
            width="9"
            orientation="horizonal"
          />
          <Text mb="4">Services Providers by Maia-approved local vendors</Text>

          <Box
            bg="#B8B3BE"
            p="5"
            rounded="8"
            flexShrink="1"
            ml="2"
            mr="2"
            mb="8"
          >
            <HStack alignItems="flex-start">
              <Text fontSize="xs" color="white" fontWeight="medium">
                Maia Pricing
              </Text>
              <Spacer />
            </HStack>
            <Heading color="white" mt="2" fontWeight="medium" fontSize="lg">
              Maia Butlers
            </Heading>
            <HStack>
              <Icon
                as={<MaterialCommunityIcons name="flower-tulip" />}
                size="sm"
                color="#F1F2F9"
                mt="3"
                mb="3"
              />
              <Icon
                as={<MaterialIcons name="local-laundry-service" />}
                size="sm"
                color="#F1F2F9"
                mt="3"
                mb="3"
              />
              <Icon
                as={<Feather name="package" />}
                mt="3"
                mb="3"
                size="sm"
                color="#F1F2F9"
              />
            </HStack>
            <Text mt="1" fontSize="sm" color="white">
              Services provided by your personal Maia on your daily/weekly
              service day. These services have a modest 5% service charge, plus
              includes the cost of your goods.
            </Text>
            <Text mt="2" fontSize="sm" color="white" bold>
              Ex: flowers, groceries, laundry, dry cleaning, package pickup and
              dropoff, etc.
            </Text>

            <Divider
              bg="white"
              thickness="2"
              width="90"
              orientation="horizonal"
              mt="7"
              mb="4"
            />
            <Heading color="white" mt="2" fontWeight="medium" fontSize="lg">
              Services Providers by Maia-approved local vendors
            </Heading>
            <HStack>
              <Icon
                as={<MaterialIcons name="dry-cleaning" />}
                size="sm"
                mt="3"
                mb="3"
                color="#F1F2F9"
              />
              <Icon
                as={<Entypo name="tools" />}
                size="sm"
                mt="3"
                mb="3"
                color="#F1F2F9"
              />
              <Icon
                as={<MaterialIcons name="local-car-wash" />}
                size="sm"
                mt="3"
                mb="3"
                color="#F1F2F9"
              />
            </HStack>
            <Text mt="1" fontSize="sm" color="white">
              Services providers by Maia-approved local vendors, and can be
              overseen by your personal Maia. These costs vary by area, and Maia
              takes full responsibility for the quality of these services.
            </Text>
            <Text mt="2" fontSize="sm" color="white" bold>
              Ex: home cleaning, handman, car washes, etc.{" "}
            </Text>
            <Flex></Flex>
          </Box>
        </Center>
      </View>
    </ScrollView>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Pricing />
      </Center>
    </NativeBaseProvider>
  );
};
