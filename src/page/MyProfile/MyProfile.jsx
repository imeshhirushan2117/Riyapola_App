import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import my_Profile from '.././../assets/img/myProfile.png';
import TextField from '../../common/TextField/TextField';
import DesignButton from '../../common/DesignButton/DesignButton';

export default function MyProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [nic, setNic] = useState('');
  const [address, setAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

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

  const update = () => {
    // Implement update functionality
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.mainContainer}>
        <View style={styles.avatarContainer}>
          <Avatar.Image size={100} source={my_Profile} style={styles.avatarImg} />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.column}>
            <TextField label={'First Name'} value={firstName} style={styles.textField} onChange={setFirstName} />
            <TextField label={'Last Name'} value={lastName} style={styles.textField} onChange={setLastName} />
            <TextField label={'Email'} type={'email'} value={email} style={styles.textField} onChange={setEmail} />
            <TextField label={'Contact'} value={contact} style={styles.textField} onChange={setContact} />
          </View>
          <View style={styles.column}>
            <TextField label={'Nic'} value={nic} style={styles.textField} onChange={setNic} />
            <TextField label={'Address'} value={address} style={styles.textField} onChange={setAddress} />
            <TextField label={'User Name'} value={userName} style={styles.textField} onChange={setUserName} />
            <TextField label={'Password'} type={'password'} value={password} style={styles.textField} onChange={setPassword} />
          </View>
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
    backgroundColor: 'black',
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
});
