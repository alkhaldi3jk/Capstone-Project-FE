// import { nativeSelectClasses } from '@mui/material'
// import React, { Component } from 'react'
// import DatePicker from 'react-native-datepicker'
// import {View} from "react-native";
 
// export default class MyDatePicker extends Component {
//   constructor(props){
//     super(props)
//     this.state = {date:"2021-11-12"}
//   }
 
//   render(){
//     return (
//       <View>
//       <DatePicker
//         style={{width: 200}}
//         date={this.state.date}
//         mode="date"
//         placeholder="select date"
//         format="YYYY-MM-DD"
//         minDate="2021-11-12"
//         maxDate="2021-11-12"
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 4,
//             marginLeft: 0
//           },
//           dateInput: {
//             marginLeft: 36
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         onDateChange={(date) => {this.setState({date: date})}}
//       />
//       <DatePicker
//         style={{width: 200}}
//         date={this.state.date}
//         mode="date"
//         placeholder="select date"
//         format="YYYY-MM-DD"
//         minDate="2021-11-12"
//         maxDate="2021-11-12"
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 4,
//             marginLeft: 0
//           },
//           dateInput: {
//             marginLeft: 36
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         onDateChange={(date) => {this.setState({date: date})}}
//       />
//       </View>
//     )
//   }
// }