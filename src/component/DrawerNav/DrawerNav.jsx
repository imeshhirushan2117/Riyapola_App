import React from 'react'
import Vehicles from '../../page/Vehicles/Vehicles';
import MyProfile from '../../page/MyProfile/MyProfile';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNav({navigation}) {

  const logout = () => {
    navigation.navigate('Home')
  };



  return (
    <Drawer.Navigator

      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={logout} />
          </DrawerContentScrollView>
        )
      }}

    >
      <Drawer.Screen name="Vehicles" component={Vehicles} />
      <Drawer.Screen name="Profile" component={MyProfile} />

    </Drawer.Navigator>
  )
}