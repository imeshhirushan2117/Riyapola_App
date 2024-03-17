import React from 'react';
import { Text } from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native';
import TextField from '../../common/TextField/TextField';
import DesignButton from '../../common/DesignButton/DesignButton';
import MainFooter from '../../component/MainFooter/MainFooter';
import { useState } from 'react';

export default function ReservationPage() {

    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [nic, setNic] = useState("")

    const booking = () => {
        console.log(name,contact,nic);
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.mainContainer}>

                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Reservation</Text>
                    <Text style={styles.subText}>Book Your Vehicle Today</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Pickup Date & Time</Text>
                    <Text style={styles.infoText}>Return Date & Time</Text>
                </View>

                <View style={styles.textFieldContainer}>
                    <TextField label={'Name'} value={name} style={styles.textField} onChange={(val) => setName(val)} />
                    <TextField label={'Contact'} value={contact} style={styles.textField} onChange={(val) => setContact(val)} />
                    <TextField label={'Nic'} value={nic} style={styles.textField} onChange={(val) => setNic(val)} />
                </View>

                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total : RS.5000.00</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <DesignButton
                        style={styles.btn}
                        buttonColor={'#A50010'}
                        textColor={'white'}
                        rippleColor={'#64000A'}
                        label={'Booking Vehicle'}
                        onPress={booking}
                    />
                </View>

            </View>
            <View>
                <MainFooter />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    mainContainer: {
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        height: 627
    },
    textContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#A50010',
        marginBottom: 5,
    },
    subText: {
        fontSize: 16,
        color: '#333',
    },
    infoContainer: {
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
    textFieldContainer: {
        width: "85%",
        marginBottom: 20,
    },
    textField: {
        width: "100%",
        margin:4,
    },
    totalContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#A50010',
    },
    buttonContainer: {
        width: "85%",
    },
    btn: {
        borderRadius: 4,
        fontSize: 18,
    },

});
