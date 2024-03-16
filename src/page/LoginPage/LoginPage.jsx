import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import admin_img from '../../assets/img/admin.png'
import TextField from '../../common/TextField/TextField';
import MainFooter from '../../component/MainFooter/MainFooter';

import { Button } from 'react-native-paper';

export default function LoginPage() {
    return (

        <ScrollView>
            <View style={styles.mainView}>
                <View style={styles.imgView}>
                    <Image source={admin_img} />
                </View>

                <View style={styles.textFieldContainer}>
                       <View style={styles.textView}>
                            <TextField label={'Email'} style={styles.textField} onChange={(val) => console.log(val)}/>
                       </View>

                       <View style={styles.textView}>
                            <TextField label={'Password'} type={'password'}  style={styles.textField}  onChange={(val) => console.log(val)}/>
                       </View>
                </View>

                <View>
                    
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
})
