import React from 'react'
import { Text } from 'react-native-paper';
import { View, ScrollView, StyleSheet } from 'react-native'

export default function ReservationPage() {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View>
                    <Text style={styles.headerText} variant="headlineLarge">Reservation</Text>
                    <Text style={styles.subText} variant="titleSmall">Book Your Vehicle Today</Text>
                </View>

                <View>
                    <View><Text variant="titleSmall">adde date select date Pickup Date & Time</Text></View>
                    <View><Text variant="titleSmall">adde date select date Return Date & Time</Text></View>


                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 15,
    },


    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#A50010',
    },

    subText: {
        textAlign: 'center',
    },
})