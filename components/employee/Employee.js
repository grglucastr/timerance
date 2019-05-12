import React from 'react';
import { View,  TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements'

import styles from './styles'

const Employee = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text h3>Timerance</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('EmployeeDetails')}
        style={styles.btnDefault}>
        <Text style={styles.btnDefaultText}>Proceed</Text>
      </TouchableOpacity>
      
    </View>
  );
}



export default Employee;