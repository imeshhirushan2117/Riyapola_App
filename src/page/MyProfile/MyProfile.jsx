import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import my_Profile from '.././../assets/img/myProfile.png';
import TextField from '../../common/TextField/TextField';
import DesignButton from '../../common/DesignButton/DesignButton';
import edit_icon from '../../assets/img/edit_icon.png'
import { Image } from 'react-native';
import instance from '../../services/Axious';

export default function MyProfile() {

  const [updateData, setUpdateData] = useState()

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [diseble, setDiseble] = useState(true)

  const clear = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setContact('');
    setNic('');
    setAddress('');
    setUserName('');
    setPassword('');
  };

  useEffect(() => {
    getCustomerInformation()
  }, [])

  const update = () => {
    instance.put('/customer/updateCustomer', {
      firstName: firstName ,
      lastName: lastName ,
      email: email,
      contact: contact ,
      nic: nic,
      address: address ,
      userName: userName,
      password: password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const getCustomerInformation = () => {
    instance.get('/customer/getUserInfoById')
    .then(function (response) {
      const userData = response.data;
      setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setEmail(userData.email);
        setContact(userData.contact);
        setNic(userData.nic);
        setAddress(userData.address);
        setUserName(userData.userName);
        setPassword(userData.password);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
        
  }

  const editBtn = () => {
    if (diseble == true) {
      setDiseble(false)
    } else {
      setDiseble(true)
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
            <TextField label={'First Name'} value={firstName} style={styles.textField} onChange={setFirstName} disabled={diseble} />
            <TextField label={'Last Name'} value={lastName} style={styles.textField} onChange={setLastName} disabled={diseble} />
            <TextField label={'Email'} type={'email'} value={email} style={styles.textField} onChange={setEmail} disabled={diseble} />
            <TextField label={'Contact'} value={contact} style={styles.textField} onChange={setContact} disabled={diseble} />
          </View>
          <View style={styles.column}>
            <TextField label={'Nic'} value={nic} style={styles.textField} onChange={setNic} disabled={diseble} />
            <TextField label={'Address'} value={address} style={styles.textField} onChange={setAddress} disabled={diseble} />
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

          <View style={styles.btnView}>
            <DesignButton
              style={styles.btn}
              buttonColor={'#16a085'}
              textColor={'white'}
              rippleColor={'#1abc9c'}
              label={'Update'}
              onPress={update}
            />
          </View>
        </View>
      </View>
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
    width: '48%',
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
  btnView: {
    width: '45%',
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
  }
});
