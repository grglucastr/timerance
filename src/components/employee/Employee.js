import React from 'react'
import {View, Text, TextInput, StyleSheet, 
        ToastAndroid, TouchableOpacity, } 
from 'react-native'

import ModalNFC  from '../modal-nfc'
import { appStyles } from '../../common';

class Employee extends React.Component{

  state = {
    employeeID: "",
    modalVisible: true,
  }

  static navigationOptions = {
    header: null,
  }

  onCloseModal = () => {
    this.setState(state => ({
      ...state,
      modalVisible: false,    
    }));

    this.input.focus();
  }

  onProceed = () => { 
    const {employeeID} = this.state;
    if(employeeID === '11179629'){
      this.setState({employeeID: ''});
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

        <ModalNFC 
          isVisible={this.state.modalVisible}
          onModalClose={() => this.onCloseModal()}/>

        <Text style={styles.title}>Timerance</Text>
        <View style={styles.controlContainer} >
          <TextInput
            ref={x => this.input = x}
            maxLength={8}
            keyboardType="numeric" 
            placeholder={`Enter employee's ID number`}
            value={this.state.employeeID}
            onChangeText={(employeeID) => this.setState({employeeID})}
            style={appStyles.input} />
        
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
    fontWeight:'bold',
    marginTop: '20%',
  },

  controlContainer:{
    width:'100%',
    marginTop: '40%',
  },
});

export default Employee