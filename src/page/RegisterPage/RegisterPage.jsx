import { Text, View, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import TextField from '../../common/TextField/TextField';
import MainFooter from '../../component/MainFooter/MainFooter';
import DesignButton from '../../common/DesignButton/DesignButton';

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        console.log(firstName,lastName , email, password);
    }

    const back = () => {
        console.log("Back");
    }

    return (
        <ScrollView>
            <ImageBackground source={require('../../assets/img/loginCar3.jpg')} style={styles.backgroundImage}>

                <View style={styles.overlay} />
                <View style={styles.mainView}>
                        <View style={styles.imgView}>
                            <Image source={require('../../assets/img/register.png')} />
                        </View>

                        <View style={styles.textFieldContainer}>
                            <View style={styles.textView}>
                                <TextField label={'First Name'} value={firstName}  style={styles.textField} onChange={(val) => setFirstName(val)} />
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
        width: "100%",
        fontSize: 18,
    },
    textContainer: {
        paddingTop: 15,
        width: '85%',
    },
    text: {
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'left',
        color: 'white'
    },
});
