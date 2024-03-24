import { Text, View, ScrollView, Image, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import TextField from '../../common/TextField/TextField';
import MainFooter from '../../component/MainFooter/MainFooter';
import DesignButton from '../../common/DesignButton/DesignButton';
import instance from '../../services/Axious'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';


export default function RegisterPage({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);


    const register = () => {
        setLoading(true);
        setTimeout(() => {
            registerCustomer();
            setLoading(false);
        }, 1000);
    }


    const registerCustomer = () => {
        if (firstName && lastName && email && password != null) {
            console.log(firstName, lastName, email, password);
            const data = {
                firstName: firstName,
                lastName: lastName,
                userName: email,
                password: password
            }
            instance.post('/customer/registerCustomer', data, {
            })
                .then(function (response) {
                     console.log(response); 
                    Dialog.show({
                        type: ALERT_TYPE.SUCCESS,
                        title: 'Success',
                        textBody: 'Register Customer Success!',
                        button: 'close',
                    })
                    navigation.navigate('Login')
                })
                .catch(function (error) {
                    console.log(error);
                    Dialog.show({
                        type: ALERT_TYPE.SUCCESS,
                        title: 'Warning',
                        textBody: 'Register Customer Un Success!',
                        button: 'close',
                    })
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


    const back = () => {
        setLoading(true);
        setTimeout(() => {
            console.log("Navigating to login page...");
            navigation.navigate('Login')
            setLoading(false);
        }, 1000);
    }

    return (
        <ScrollView>
            <ImageBackground source={require('../../assets/img/loginCar3.jpg')} style={styles.backgroundImage}>

                <View style={styles.overlay} />

                <View style={styles.topicView}>
                    <Text style={styles.topicText}>Customer Register</Text>
                </View>

                <View style={styles.mainView}>
                    <View style={styles.imgView}>
                        <Image source={require('../../assets/img/register.png')} />
                    </View>

                    <View style={styles.textFieldContainer}>
                        <View style={styles.textView}>
                            <TextField label={'First Name'} value={firstName} style={styles.textField} onChange={(val) => setFirstName(val)} />
                        </View>


                        <View style={styles.textView}>
                            <TextField label={'Last Name'} value={lastName} style={styles.textField} onChange={(val) => setLastName(val)} />
                        </View>

                        <View style={styles.textView}>
                            <TextField label={'Email'} value={email} style={styles.textField} onChange={(val) => setEmail(val)} />
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
                                label={'Register'}
                                onPress={register}
                            />
                        </View>

                        <View style={styles.textContainer}>
                        <Text style={styles.text} onPress={back}>Back</Text>
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
        width: '85%',
        marginTop:14
    },
    text: {
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'left',
        color: 'white',
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
    }
});
