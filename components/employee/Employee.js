import React from 'react';
import { StyleSheet, View,  TextInput } from 'react-native';
import {Text } from 'react-native-elements'

const Employee = () => {
  return(
    <View style={styles.container}>
      <Text h3>Timerance</Text>
      <TextInput 
        name=""
        style={styles.textInput}
        placeholder="Coachee ID"
      />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "blue",
    borderWidth: 3,
    width: "100%",
    marginTop: 25,
  },

  
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20
  }
})


export default Employee;