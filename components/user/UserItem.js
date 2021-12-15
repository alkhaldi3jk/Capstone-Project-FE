import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import authStore from '../../stores/authStore';
export default function UserItem({user}) {

  // const handleAdd = () => {
  //   const newItem = { quantity, user };
  //   console.log('handleAdd -> newItem', newItem);
  // };

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>User Name</DataTable.Title>
          <DataTable.Title>Request</DataTable.Title>
          <DataTable.Title >deny/approve</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>{authStore.user?.username}</DataTable.Cell>
          <DataTable.Cell>{authStore.user?.requests}</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row>



      </DataTable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});