import {  
  createStackNavigator,
  createAppContainer } from 'react-navigation';

import Employee from '../employee';
import EmployeeDetail from '../employee-detail';
import Timer from '../timer';
import Stopwatch from '../stopwatch';

const AppNavigator = createStackNavigator(
  {
    Home:Employee,
    Detail: {
      screen: EmployeeDetail,
      navigationOptions:{
        title: 'Employee Details',
      },
    },
    Timer: Timer,
    Stopwatch: Stopwatch,
    /*Summary: {},*/
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTitleStyle:{
        color: '#fff',
      },
    },
  }
);


export default createAppContainer(AppNavigator);