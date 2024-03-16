import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import admin_img from '../../assets/img/admin.png'
import TextField from '../../common/TextField/TextField';
import MainFooter from '../../component/MainFooter/MainFooter';
import DesignButton from '../../common/DesignButton/DesignButton';

export default function LoginPage() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


const signIn = () => {
    console.log(email,password);
}

    return (
        <ScrollView>
            <View style={styles.mainView}>
                <View style={styles.imgView}>
                    <Image source={admin_img} />
                </View>

                <View style={styles.textFieldContainer}>
                       <View style={styles.textView}>
                            <TextField label={'Email'} style={styles.textField} onChange={(val) => setEmail(val)}/>
                       </View>

                       <View style={styles.textView}>
                            <TextField label={'Password'} type={'password'}  style={styles.textField}  onChange={(val) => setPassword(val)}/>
                       </View>
                </View>

                <View style={styles.buttonContainer} >
                <DesignButton 
                style={styles.btn}
                buttonColor={'#2980b9'} 
                textColor={'white'}
                rippleColor={'#3498db'}
                label={'Sign In'}
                onPress={signIn}
                />
                </View>
            </View>

            {/* <View>
                <MainFooter />
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: 'rgba(125, 0, 16, 1)' 
    },

    imgView: {
      
    },
    textFieldContainer: {
        width: "85%", 
        marginTop: 20, 
    },

    textField:{
        width:"100%",
    },

    textView:{
        padding:4
    },
    buttonContainer:{
        marginTop:20,
        width:"85%"
    },
    btn:{
        borderRadius:4,
        width:"100%",
    },
})
