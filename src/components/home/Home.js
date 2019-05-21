import {  
  createStackNavigator,
  createAppContainer } from 'react-navigation';

import Employee from '../employee';
import EmployeeDetail from '../employee-detail';

const AppNavigator = createStackNavigator(
  {
    Home:Employee,
    Detail: {
      screen: EmployeeDetail,
      navigationOptions:{
        title: 'Employee Details',
      },
    },
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