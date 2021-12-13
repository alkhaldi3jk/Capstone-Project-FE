import React, { useState } from "react";
import { Image, Text } from "react-native";
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
} from "native-base";
import { baseURL } from "../../stores/instance";
import RequestList from "./RequestList";

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
        <Text> {service.name} </Text>
        <Image
          source={{ uri: baseURL + service.image }}
          style={{ width: 10, height: 10 }}
        />

        <Box>
          <AspectRatio w="auto" ratio={16 / 9}>
            <Image source={{ uri: baseURL + service.image }} alt="image" />
          </AspectRatio>
          <Center
            _text={{
              color: "#181616",
              fontWeight: "600",
              fontSize: "23px",
              // fontFamily: "",
              color: "gray.700",
              fontStyle: "italic",
              fontSize: "25px",
              height: "auto",
              width: "auto",
            }}
            // position="center"
            bottom="0"
            px="3"
            py="1.5"
          >
            {service.name}
          </Center>
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
          >
            <Text
              style={{
                color: "#181616",
                fontWeight: "600",
                fontSize: "15px",
                padding: 12,
                // fontFamily: "",
                color: "gray.700",
                height: "auto",
                width: "auto",
              }}
            >
              About This Service
            </Text>
            <Heading size="sm" mt="0.5" px="6" color="black">
              About This Service
            </Heading>
            <Text
              font-family="lucida grande', tahoma, verdana, arial, sans-serif"
              letterSpacing="2"
              px="6"
            >
              Add some color to your home with fresh flowers from your go-to
              local florist or grocery store. Let us know what you like- or let
              your Maia make it a surprise, delivered to your door. Pricing:
              Flowers are curated based on your budget specified here.{" "}
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
          >
            <Heading
              // flex={1}
              px="6"
              size="sm"
              mt="0.5"
              color="black"
              isFullWidth="true"
            >
              Preferences
            </Heading>
            <Text>
              What is your flower budget? What type, color, and size flowers
              would you like? Do you want your flowers from a florist or from
              the grocery store? Upload a photo to help us find flowers you
              like.
            </Text>
            <Button onPress={() => navigation.navigate("Pricing")}>
              <Text>pricing</Text>
            </Button>
            <Input
              variant="outline"
              top="3"
              px="6"
              // alignItems="left"
              mb="10"
              w="80"
              h="90"
              placeholder="e.g., I want a bouqet with mixed vibrant colors from a local florist."
            />
            <FormControl isRequired isInvalid>
              <FormControl.Label>Pick a day</FormControl.Label>
              <Button
                leftIcon={<Icon as={Fontisto} name="date" size="sm" />}
                color="#4f59b1"
                mt="1"
                backgroundColor="#4f59b1"
                size="20"
                title={"Pick a date"}
                onPress={openDatePicker}
              />
              <DatePicker
                isVisible={showDatePicker}
                mode={"single"}
                onCancel={onCancel}
                onConfirm={onConfirm}
                color="F1F2F9"
                backgroundColor="#4F59B1"
                headerColor="#4f59b1"
                colorOptions={colorOptions}
              />
            </FormControl>
            <Button
              leftIcon={
                <Icon as={FontAwesome5} name="concierge-bell" size="sm" />
              }
              bg="white"
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
              onPress={() => navigation.navigate("Home")}
            >
              Request
            </Button>

            <Text>Preferences</Text>

            <RequestList options={service.option} />
          </Box>
        </Center>
      </View>
    </ScrollView>
  );
}

export default ServiceDetail;
