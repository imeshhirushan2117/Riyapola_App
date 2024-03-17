import React from 'react'
import LoginPage from './src/page/LoginPage/LoginPage'
import HomePage from './src/page/HomePage/HomePage';
import DrawerNav from './src/component/DrawerNav/DrawerNav';
import RegisterPage from './src/page/RegisterPage/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CarInformation from './src/page/CarInformation/CarInformation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Drawer" component={DrawerNav} options={{ headerShown: false }}/>
        <Stack.Screen name="Information" component={CarInformation}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}