import { Text, View, ScrollView, Image, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import TextField from '../../common/TextField/TextField';
import MainFooter from '../../component/MainFooter/MainFooter';
import DesignButton from '../../common/DesignButton/DesignButton';
import instance from '../../services/Axious'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';


export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState("imesh@");
    const [password, setPassword] = useState("12345");
    const [loading, setLoading] = useState(false);

    const signIn = () => {
        setLoading(true);
        setTimeout(() => {
            customerSignIn()
            clear()
            setLoading(false);
        }, 1000);
    }

    const customerSignIn = () => {
        if (email && password != null) {
            instance.post('/customer/customerLogin', {
                userName: email,
                password: password
            })
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.token != null) {
                        storeData(response);
                    }
                })
                .catch(function (error) {
                    console.log("error " + error);
                    console.log("login Un Success");
                });
        } else {
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Warning',
                textBody: 'Enter Valed Data',
                button: 'close',
            })
        }
    }

    const clear = () => {
        setEmail('');
        setPassword('');
    }

    const storeData = async (response) => {
        try {
            await AsyncStorage.setItem('stmToken', response.data.token);
            const value = await AsyncStorage.getItem('stmToken');
            console.log(value);
            navigation.navigate('Drawer')
        } catch (e) {
            console.log(e, " login failed");
        }
    };

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            navigation.navigate('Register')
            setLoading(false);
        }, 1000);
    }

    const back = () => {
        setLoading(true);
        setTimeout(() => {
            navigation.navigate('Home')
            setLoading(false);
        }, 1000);

    }

    return (
        <ScrollView>
            <ImageBackground source={require('../../assets/img/loginCar4.jpg')} style={styles.backgroundImage}>

                <View style={styles.overlay} />

                <View style={styles.topicView}>
                    <Text style={styles.topicText}>Sign In</Text>
                </View>

                <View style={styles.mainView}>

                    <View style={styles.imgView}>
                        <Image source={require('../../assets/img/admin.png')} />
                    </View>

                    <View style={styles.textFieldContainer}>
                        <View style={styles.textView}>
                            <TextField label={'User Name'} value={email} style={styles.textField} onChange={(val) => setEmail(val)} />
                        </View>

                        <View style={styles.textView}>
                            <TextField label={'Password'} value={password} type={'password'} style={styles.textField} onChange={(val) => setPassword(val)} />
                        </View>
                    </View>

                    <AlertNotificationRoot>

                        <View style={styles.buttonContainer} >
                            <DesignButton
                                style={styles.btn}
                                buttonColor={'#A50010'}
                                textColor={'white'}
                                rippleColor={'#64000A'}
                                label={'Sign In'}
                                onPress={signIn}
                            />
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.text} onPress={register}>Register Customer</Text>
                            <Text style={styles.text2} onPress={back}> Back</Text>
                        </View>



                    </AlertNotificationRoot>

                    {loading && (
                        <View style={styles.loaderContainer}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                    )}
                </View>
            </ImageBackground>

            <View>
                <MainFooter />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    mainView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 650,
    },
    imgView: {

    },
    textFieldContainer: {
        width: "85%",
        marginTop: 20,
    },
    textField: {
        width: "100%",
    },
    textView: {
        padding: 4
    },
    buttonContainer: {
        marginTop: 20,
        width: "85%"
    },
    btn: {
        borderRadius: 4,
        width: 325,
        fontSize: 18,
    },
    textContainer: {
        paddingTop: 15,
        display: 'flex',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'left',
        color: 'white',
    },

    text2: {
        fontSize: 15,
        fontStyle: 'italic',
        color: 'white',
        textAlign: 'right',
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

    topicView: {
        paddingTop: 50
    },

    topicText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },



});
