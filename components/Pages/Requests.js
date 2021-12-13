// import { observer } from "mobx-react";
// import { Box, Center, Text, View } from "native-base";
// import React from "react";
// import serviceStore from "../../stores/serviceStore";
// import ServiceItem from "./ServiceItem";

// function Requests(navigation) {
//   const serviceList = serviceStore.services.map((service) => (
//     <ServiceItem service={service} key={service._id} navigation={navigation} />
//   ));

//   return (
//     <Center>
//       <View>
//         <Box
//           width="126px"
//           height="54px"
//           backgroundColor="#bfd0e0"
//           overflow="visible"
//         >
//           Past
//         </Box>
//         <Box
//           width="126px"
//           height="54px"
//           backgroundColor="#b8b3be"
//           overflow="visible"
//         >
//           Upcoming
//         </Box>
//         <Box
//           width="126px"
//           height="54px"
//           backgroundColor="#bfd0e0"
//           overflow="visible"
//         >
//           Pending
//         </Box>
//         <Box
//           width="366px"
//           height="80px"
//           borderRadius="5"
//           overflow="visible"
//           backgroundColor="#e8ecf8"
//           _text={{
//             color: "black",
//             fontWeight: "400",
//             fontSize: "15",
//           }}
//           bottom="-10"
//           px="3"
//           py="1.5"
//         >
//           Service Request Name
//         </Box>
//       </View>
//     </Center>
//   );
// }

// export default observer(Requests);
