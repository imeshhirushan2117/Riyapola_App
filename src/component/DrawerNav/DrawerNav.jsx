import React from 'react'
import { useState } from 'react';
import Vehicles from '../../page/Vehicles/Vehicles';
import MyProfile from '../../page/MyProfile/MyProfile';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {ActivityIndicator , StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const Drawer = createDrawerNavigator();

export default function DrawerNav({navigation}) {

  const [loading, setLoading] = useState(false);

  const logout = () => {
    setLoading(true);
    setTimeout(() => {
        removeValue()
        setLoading(false);
    }, 1000);

  };

  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('stmToken')
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Log Out Success !',
        button: 'close',
      })
      navigation.navigate('Home')
    } catch(e) {

    }
   
  }



  return (
    <Drawer.Navigator

      drawerContent={props => {
        return (


          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <AlertNotificationRoot>
            <DrawerItem label="Logout" onPress={logout} />
            </AlertNotificationRoot>
          </DrawerContentScrollView>
        )

        {loading && (
          <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="white" />
          </View>
      )}
      }}

    >
      <Drawer.Screen name="Vehicles" component={Vehicles} />
      <Drawer.Screen name="Profile" component={MyProfile} />

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  loaderContainer: {
      position: 'absolute',
      bottom: 40,
      zIndex: 1000,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      width: '100%',
      height: '100%',
  },

});
