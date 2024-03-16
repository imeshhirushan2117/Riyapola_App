import { View, Image, StyleSheet, ActivityIndicator , ScrollView} from 'react-native';
import React, { useState } from 'react';
import home_img from '../../assets/img/home-car.jpg';
import MainFooter from '../../component/MainFooter/MainFooter';

import {
    Text,
    Button,
} from 'react-native-paper';

export default function HomePage() {
    const [loading, setLoading] = useState(false);

    const goToLoginPage = () => {
        setLoading(true);
        setTimeout(() => {
            console.log("Navigating to login page...");
            setLoading(false);
        }, 1000);
    };

    return (
        <>
            <View style={styles.mainView}>
                <Image style={styles.img} source={home_img} />
                <View style={styles.overlay}></View>
                <View style={styles.textContainer}>
                    <Text style={styles.headlineMedium}>Well Come To </Text>
                    <Text style={[styles.headlineMedium, styles.redText]}>Riyapola</Text>
                </View>
                <View style={styles.btnView}>
                    <Button
                        mode="contained"
                        onPress={goToLoginPage}
                        style={styles.buttonStyle}
                        labelStyle={styles.buttonLabel}>
                        Go to Login Page
                    </Button>
                </View>

                {loading && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="white" />
                    </View>
                )}
            </View>
            <View><MainFooter /></View>
        </>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        zIndex: -1,
    },
    overlay: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
    },
    textContainer: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headlineMedium: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    redText: {
        color: '#A50010',
        fontWeight: 'bold',
    },

    btnView: {
        zIndex: 100
    },

    buttonStyle: {
        marginTop: 20,
        backgroundColor: '#A50010',
        width: 300,
        borderRadius: 10
    },
    buttonLabel: {
        color: 'white',
        fontWeight: 'bold',
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
