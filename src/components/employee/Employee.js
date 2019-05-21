import React from 'react'
import { Modal, View, Text, StyleSheet, ToastAndroid, Image, Alert } from 'react-native'
import { TextInput, TouchableOpacity,  } from 'react-native-gesture-handler';
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
    alert('pressed!');
    this.setState(state => ({
      ...state,
      modalVisible: false,    
    }));
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

        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View 
            style={styles.modal}>            
            <View
              style={styles.modalContentContainer}>

              <Image 
                style={{width: 100, height: 80}}
                source={require('../../../img/card_nfc.png')}/>

              <Text style={styles.modalText}>
                Approach the badge near to the NFC Reader in 
                order to get the employee's information.
              </Text>

              <TouchableOpacity
                onPress={() => this.onCloseModal()}
                style={appStyles.button}>
                <Text
                  style={appStyles.buttonCancelText}>
                  Cancel
                </Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </Modal>

        <Text style={styles.title}>Timerance</Text>
        <View style={styles.controlContainer} >
          <TextInput
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

  modal:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContentContainer:{
    width: 300,
    height: 250,
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  
  modalText:{
    fontSize: 16,
    lineHeight:25,
    textAlign:'center',
    color: 'black',
  },

});

export default Employee