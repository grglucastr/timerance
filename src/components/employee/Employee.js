import React from 'react'
import {View, Text, StyleSheet, ToastAndroid} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { appStyles } from '../../common';

class Employee extends React.Component{

  state = {
    employeeID: "",
  }

  static navigationOptions = {
    header: null,
  }

  onProceed = () => { 

    const {employeeID} = this.state;
    if(employeeID === '11179629'){
      return this.props.navigation.navigate('Detail', {employeeID});
    }

    ToastAndroid.showWithGravity(
      'Employee not found', 
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }


  render(){
    return(
      <View style={styles.container}>
        
        <Text style={styles.title}>Timerance</Text>
        <View style={styles.controlContainer} >
          <TextInput
            maxLength={8}
            keyboardType="numeric" 
            placeholder={`Enter employee's ID number`}
            value={this.state.employeeID}
            onChangeText={(employeeID) => this.setState({employeeID})}
            style={styles.input} />
        
          <TouchableOpacity 
            style={appStyles.button}
            onPressOut={this.onProceed}>
            <Text style={appStyles.buttonText} >Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title:{
    fontSize: 25,
    marginTop: '20%',
  },
  controlContainer:{
    width:'100%',
    marginTop: '40%',
  },
  
});

export default Employee