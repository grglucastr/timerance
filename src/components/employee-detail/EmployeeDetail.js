import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { appStyles } from '../../common';

class EmployeeDetail extends React.Component{ 

  render(){

    const { navigation } = this.props;
    const employeeID = navigation.getParam('employeeID', 11179629);
    const department = 'IM HHP - Production';
   
    return(
      <View style={styles.container}>

        <View style={styles.empInfoContainer}>
          <View>
            <Image
              style={appStyles.roundedImage}
              source={require('../../../img/employee.jpeg')}
            />
          </View>
          <View style={styles.empInfoTextContainer}>
            <Text style={styles.empInfoName}>George Bentes</Text>
            <Text style={styles.empInfoExtras}>{ employeeID }</Text>
            <Text style={styles.empInfoExtras}>{ department }</Text>
          </View>
        </View>

        <TouchableOpacity style={appStyles.button}
                          onPress={() => this.props.navigation.navigate('Timer')}>
          <Text style={appStyles.buttonText}>
            Start
          </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    
  },

  empInfoContainer: {
    flexDirection: 'row',
    backgroundColor: '#f5f6fa',
    
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',    
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding:10,
  },

  empInfoTextContainer:{
    justifyContent: 'space-between'
  },

  empInfoName:{
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
  },

  empInfoExtras:{
    marginLeft: 15,
    fontSize: 14,
  },

});


export default EmployeeDetail