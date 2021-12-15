import React from 'react'
import { Text } from 'react-native'
import requestStore from '../../stores/RequestStore'
import serviceStore from '../../stores/serviceStore'

function Upcoming() {

    const requestList= requestStore.requests.filter((request)=> <requ/>)
    return (
       <Text> List of Upcoming Requests </Text>
    )
}

export default Upcoming
