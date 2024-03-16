import { Text, View, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import admin_img from '../../assets/img/admin.png'
import MainFooter from '../../component/MainFooter/MainFooter';

export default function LoginPage() {
    return (

        <ScrollView>
            <View style={styles.mainView}>
                <View style={styles.imgView}>
                    <Image source={admin_img} />
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
    },

    imgView: {
        marginTop: 100
    },
})