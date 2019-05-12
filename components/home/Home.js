import Employee from '../employee'
import EmployeeDetails from '../employeeDetails'

import { createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator(
{
  Home: {
    screen: Employee,
    navigationOptions: {
      title: 'Employee',
    },
  },
  EmployeeDetails: {
    screen: EmployeeDetails,
    navigationOptions: {
      title: 'Employee Details',
    },
  },
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: '#3a3b3d',
    },
    headerTitleStyle:{
      color: '#fff',
    },
  },
})


export default createAppContainer(AppNavigator)