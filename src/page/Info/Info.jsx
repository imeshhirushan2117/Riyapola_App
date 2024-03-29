import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity , ActivityIndicator} from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import my_Profile from '.././../assets/img/myProfile.png';
import TextField from '../../common/TextField/TextField';
import DesignButton from '../../common/DesignButton/DesignButton';
import edit_icon from '../../assets/img/edit_icon.png'
import { Image } from 'react-native';
import instance from '../../services/Axious';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Info({ navigation }) {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [diseble, setDiseble] = useState(true)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCustomerInformation()
  }, [])


  const clear = () => {
    setUserName('')
    setPassword('')
  };

  const update = () => {
    // instance.put('/customer/updateUserInfoById', {
    //   userName:userName ,
    //   password: password,
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     Dialog.show({
    //       type: ALERT_TYPE.SUCCESS,
    //       title: 'Success',
    //       textBody: 'Customer Update Success!',
    //       button: 'close',
    //     })
    //     setDiseble(true)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     Dialog.show({
    //       type: ALERT_TYPE.SUCCESS,
    //       title: 'Warning',
    //       textBody: 'Update Customer Un Success!',
    //       button: 'close',
    //     })
    //   });
  };

  const getCustomerInformation = () => {
    // instance.get('/customer/getUserInfoById')
    //   .then(function (response) {
    //     const userData = response.data;
    //     setUserName(userData.userName);
    //     setPassword(userData.password);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })

  }

  const editBtn = () => {
    if (diseble == true) {
      setDiseble(false)
    } else {
      setDiseble(true)
    }
  }

  const deleted = () => {
    instance.delete('/customer/deletedUserInfoById')
      .then(response => {
        console.log(response);
        setLoading(true);
        removeValue()
        setTimeout(() => {
          navigation.navigate('Login')
          setLoading(false);
        }, 1000);

      })
      .catch(error => {
        console.error(error);
      });
  }

  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('stmToken')
      const value = await AsyncStorage.getItem('stmToken')
      if (value === null) {
        navigation.navigate('Home')
        console.log('=============', value);
      } else {
        console.log("Error Log Out");
      }
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.avatarContainer}>
          <Avatar.Image size={100} source={my_Profile} style={styles.avatarImg} />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.column}>
            <TextField label={'User Name'} value={userName} style={styles.textField} onChange={setUserName} disabled={diseble} />
            <TextField label={'Password'} type={'password'} value={password} style={styles.textField} onChange={setPassword} disabled={diseble} />
          </View>
        </View>

        <View style={styles.editIcon}>
          <TouchableOpacity onPress={editBtn}>
            <Image source={edit_icon} style={styles.editIconImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btnView}>
            <DesignButton
              style={styles.btn}
              buttonColor={'#f39c12'}
              textColor={'white'}
              rippleColor={'#f1c40f'}
              label={'Clear'}
              onPress={clear}
            />
          </View>

          <AlertNotificationRoot>
            <View style={styles.btnUpdate}>
              <DesignButton
                style={styles.btn}
                buttonColor={'#16a085'}
                textColor={'white'}
                rippleColor={'#1abc9c'}
                label={'Update'}
                onPress={update}
              />
            </View>
          </AlertNotificationRoot>
        </View>

          <View style={styles.deletedBtn}>
            <DesignButton
              style={styles.btn}
              buttonColor={'#e74c3c'}
              textColor={'white'}
              rippleColor={'#c0392b'}
              label={'Deleted My Account'}
              onPress={deleted}
            />
          </View>
      </View>

      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'white',
    marginTop: -100,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 50,
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '100%',
  },
  textField: {
    marginBottom: 15,
  },
  avatarImg: {
    backgroundColor: 'black',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  btnUpdate: {
    width: "85%",
    marginLeft: 20,
  },
  btnView: {
    width: '45%',
  },

  deletedBtn: {
    width: 330,
    margin: 40,

  },

  btn: {
    borderRadius: 10,
    width: '100%',
    fontSize: 18,
  },
  editIcon: {
    position: 'relative',
    left: 160,
  },
  editIconImage: {
    width: 40,
    height: 40,
  },
  editIconBtn: {
    width: '100%'
  },
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
