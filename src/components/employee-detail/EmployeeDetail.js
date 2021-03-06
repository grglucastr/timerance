import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Button, appStyles } from '../../common';

import Tests from '../tests';

import styles from './App.scss';


class EmployeeDetail extends React.Component{ 

  render(){

    const { navigation } = this.props;
    const employeeID = navigation.getParam('employeeID', 11179629);
    const department = 'IM HHP - Production';
   
    return(
      <View style={styles['container']}>
        <View style={[styles.employee, styles.round]}>
          <View styles={styles.employee__image}> 
            <Image  
              style={appStyles.roundedImage}
              source={require('../../../img/employee.jpeg')} />
          </View>
          
          <View style={styles['employee__infoDetails']}>
            <Text style={styles['employee__infoDetails__text']}>George Bentes</Text>
            <Text style={styles['employee__infoDetails__text']}>{ employeeID }</Text>
            <Text style={styles['employee__infoDetails__text']}>{ department }</Text>
          </View> 
        </View>

        <View style={[styles.statics, styles.round]}> 
          <Text style={styles['statics__avg']}>Average: 8.633 secs.</Text>
          <Text style={styles['statics__lastTest']}>Last Test: 2019-02-04</Text>
        </View>

        <Text style={styles.header1}>
          Time Tracking History
        </Text>

        <View style={[styles.tests]}>
          <Tests screenProps={{ rootNav: this.props.navigation }} />
        </View>

        
        

        <Button clickAction={() => this.props.navigation.navigate('Stopwatch')}>
          Start
        </Button>
      </View>
    )
  }
}


export default EmployeeDetail