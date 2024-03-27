import React, { useEffect, useState } from 'react'
import LoginPage from './src/page/LoginPage/LoginPage'
import HomePage from './src/page/HomePage/HomePage';
import DrawerNav from './src/component/DrawerNav/DrawerNav';
import RegisterPage from './src/page/RegisterPage/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import ReservationPage from './src/page/ReservationPage/ReservationPage';
import CustomerView from './src/page/CustomerView/CustomerView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Vehicles from './src/page/Vehicles/Vehicles';
import MyProfile from './src/page/MyProfile/MyProfile';

const Stack = createStackNavigator();
export default function App() {

  const [login, setLogin] = useState(false)

  useEffect(() => {
    checkLogin();
  }, [])


  const checkLogin = async () => {
    const value = await AsyncStorage.getItem('stmToken');
    try {
      if (value !== null) {
        setLogin(true)
      } else {
        setLogin(false)
      }
    } catch (e) {
      console.error('Token Error :', error);
      setLogin(false)
    }
  };
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          {
            login ? (<Stack.Navigator><Stack.Screen name="Drawer" component={DrawerNav} options={{ headerShown: false }} /></Stack.Navigator>) : (
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
                <Stack.Screen name="Drawer" component={DrawerNav} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
                <Stack.Screen name="Reservation" component={ReservationPage} />
                <Stack.Screen name="CustomerVehicles" component={CustomerView} />
              </Stack.Navigator>
            )
          }
        </NavigationContainer>
      </PaperProvider>
   

     {/* <PaperProvider>
       <CustomerView />
     </PaperProvider> */}

     </>
  )
}