import {  
  createStackNavigator,
  createAppContainer } from 'react-navigation';

import EmployeeIdentification from '../employee-identification';
import EmployeeDetail from '../employee-detail';
import Timer from '../timer';
import Stopwatch from '../stopwatch';

const AppNavigator = createStackNavigator(
  {
    Home:EmployeeIdentification,
    Detail: {
      screen: EmployeeDetail,
      navigationOptions:{
        title: 'Employee Details',
      },
    },
    Timer: Timer,
    Stopwatch: Stopwatch,
  },
  {
    initialRouteName: 'Detail',
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