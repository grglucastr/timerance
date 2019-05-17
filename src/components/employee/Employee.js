import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

class Employee extends React.Component{

  static navigationOptions = {
    header: null,
  }

  render(){
    return(
      <View style={styles.container}>
        
        <Text style={styles.title}>Timerance</Text>

        <View style={styles.controlContainer} >
          <TextInput 
            placeholder={`Enter employee's ID number`}
            style={styles.input} />
        
          <TouchableOpacity 
            style={styles.button}
            onPressOut={()=>this.props.navigation.navigate('Detail')}>
            <Text style={styles.buttonText} >Proceed</Text>
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
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width:'90%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius:3,
    width:'60%',
    padding: 10,
    marginTop:25,
    alignSelf: 'center',
  },
  buttonText:{
    color: '#000',
    textAlign: 'center',
  },
});

export default Employee