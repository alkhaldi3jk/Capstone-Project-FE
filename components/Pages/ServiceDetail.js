import React, { useState } from "react";
import { Image } from "react-native";
import { Ionicons, Feather, FontAwesome5, Fontisto } from "@expo/vector-icons";
import DatePicker from "react-native-neat-date-picker";
import {
  Button,
  View,
  Box,
  AspectRatio,
  Center,
  Heading,
  Input,
  FormControl,
  CheckIcon,
  Icon,
  ScrollView,
  WarningOutlineIcon,
  Select,
  HStack,
  Text,
} from "native-base";
import { baseURL } from "../../stores/instance";
import OptionList from "./OptionList";
import CheckoutButton from "../user/CheckoutButton";

function ServiceDetail({ route, navigation }) {
  const colorOptions = {
    headerColor: "#4F59B1",
    backgroundColor: "#FFF8F0",
    confirmButtonColor: "#4F59B1",
    weekDaysColor: "#4F59B1",
    selectedDateBackgroundColor: "#4F59B1",
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };

  const onConfirm = (date) => {
    // You should close the modal in here
    setShowDatePicker(false);

    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.getDate());
  };
  const { service } = route.params;

  return (
    <ScrollView vertical={true}>
      <View>
        <Box>
          <AspectRatio w="auto" ratio={16 / 9} opacity="0.85">
            <Image source={{ uri: baseURL + service.image }} alt="image" />
          </AspectRatio>
          <Heading
            padding="5"
            textAlign="right"
            color="white"
            fontWeight="400"
            font-family="lucida grande', tahoma, verdana, arial, sans-serif"
            position="absolute"
            bottom="0"
            px="30"
            py="1.5"
          >
            {service.name}
          </Heading>
        </Box>
        <Center>
          <Box
            bg="white"
            borderRadius="6"
            alignment="center"
            fontSize="11"
            onHoverIn="1.1"
            // fontSize="10"
            fontFamily="normal"
            fontSize="11px"
            mt="3"
            width="370"
          >
            <Heading
              size="sm"
              mt="2"
              ml="0"
              color="#474A4D"
              fontStyle="italic"
              padding="5"
              textAlign="left"
              font-family="lucida grande', tahoma, verdana, arial, sans-serif"
              letterSpacing="1"
            >
              About This Service
            </Heading>
            <Text
              textAlign="left"
              font-family="lucida grande', tahoma, verdana, arial, sans-serif"
              letterSpacing="0.5"
              ml="5"
              mr="5"
              color="#5F6467"
            >
              {service.about}
            </Text>
            <Text></Text>
            <Button
              mt="1"
              mb="4"
              ml="5"
              borderRadius="8"
              backgroundColor="#4f59b1"
              padding="1"
              size="8"
              width="20"
              textAlign="center"
              overflow="visible"
              onPress={() => navigation.navigate("Pricing")}
            >
              Pricing
            </Button>
            <Text
              textAlign="left"
              font-family="lucida grande', tahoma, verdana, arial, sans-serif"
              letterSpacing="0.5"
              color="#5F6467"
              mb="5"
              ml="5"
            >
              Options are curated based on your budget.
            </Text>
          </Box>
          <Box>
            <Text>{service.description}</Text>
          </Box>
          <Box
            bg="white"
            borderRadius="6"
            alignment="center"
            fontSize="11"
            onHoverIn="1.1"
            fontSize="10"
            fontFamily="normal"
            width="370"
            height="500"
          >
            <Heading
              size="sm"
              mt="2"
              ml="0"
              color="#474A4D"
              fontStyle="italic"
              padding="5"
              textAlign="left"
              font-family="lucida grande', tahoma, verdana, arial, sans-serif"
              letterSpacing="1"
            >
              Preferences
            </Heading>
            <Text
              textAlign="left"
              font-family="lucida grande', tahoma, verdana, arial, sans-serif"
              letterSpacing="0.5"
              ml="5"
              mr="5"
              color="#5F6467"
            >
              {service.preferences1}
            </Text>
            <Text
              textAlign="left"
              font-family="lucida grande', tahoma, verdana, arial, sans-serif"
              letterSpacing="0.5"
              ml="5"
              mr="5"
              color="#5F6467"
            >
              {service.preferences2}
            </Text>

            <Input
              variant="outline"
              top="3"
              px="1"
              mb="10"
              w="330"
              h="71"
              ml="5"
              multiline
              numberOfLines={4}
              padding="3"
              placeholder="e.g., I want a bouquet with mixed vibrant colors from a local florist."
            />
            <FormControl isRequired isInvalid>
              <FormControl.Label ml="5">Pick a date</FormControl.Label>
              <Button
                leftIcon={<Icon as={Fontisto} name="date" size="sm" />}
                color="#4f59b1"
                mt="1"
                backgroundColor="#4f59b1"
                size="10"
                title={"Pick a date"}
                ml="5"
                onPress={openDatePicker}
              />
              <DatePicker
                isVisible={showDatePicker}
                mode={"single"}
                onCancel={onCancel}
                onConfirm={onConfirm}
                color="#4f59b1"
                backgroundColor="#4F59B1"
                headerColor="#4f59b1"
                colorOptions={colorOptions}
              />
            </FormControl>

            <Button
              _pressed={{ bg: "white" }}
              leftIcon={
                <Icon as={FontAwesome5} name="concierge-bell" size="sm" />
              }
              bg="#4f59b1"
              // TouchableHighlight="#4f59b1"
              activeOpacity="#4f59b1"
              color="#4f59b1"
              borderRadius="6"
              bottom="-50"
              // padding="3.5"
              alignment="center"
              fontSize="11"
              onHoverIn="1.1"
              padding="2"
              textAlign="center"
              paddingRight="50"
              paddingLeft="50"
              overflow="visible"
              marginLeft="40"
              overflow="visible"
              margin="-3"
              alignItems="center"
              marginLeft="50"
              marginRight="50" // centers the button
              marginBottom="0"
              onPress={() => navigation.navigate("Thankyou")}
            >
              Request
            </Button>
            {/* <OptionList options={service.option} /> */}
            {/* <CheckoutButton navigation={navigation} /> */}
          </Box>
        </Center>
      </View>
    </ScrollView>
  );
}

export default ServiceDetail;
