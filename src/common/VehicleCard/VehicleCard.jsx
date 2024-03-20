import React, { useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { View, Image, StyleSheet } from 'react-native';
import DesignButton from '../DesignButton/DesignButton';
import DiologBox from '../../component/DiologBox/DiologBox';
export default function VehicleCard({ img, brandName, moduleName, type, transmission, passengers, status, }) {

    const [visible, setVisible] = useState(false)

    const hideDialog = () => {
        setVisible(false)
    }

    const information = () => {
        setVisible(true)
        console.log('information');
    }

    return (
        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.imageContainer}>
                    <Image source={img} style={styles.image} />
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.brandName}>{brandName}</Text>
                    <Text style={styles.moduleName}>{moduleName}</Text>
                    <Text style={styles.text}>Fuel Type: {type}</Text>
                    <Text style={styles.text}>Transmission: {transmission}</Text>
                    <Text style={styles.text}>Capacity: {passengers} Passengers</Text>
                </View>

                <View style={styles.statusContainer}>
                    <Text style={styles.status}>{status}</Text>
                </View>

                <View style={styles.btnView}>
                    <DesignButton
                        style={styles.btn}
                        buttonColor={'#005188'}
                        textColor={'white'}
                        rippleColor={'#007ACC'}
                        label={'More Information'}
                        onPress={information}
                    />

                </View>
                <DiologBox onDismiss={hideDialog} visible={visible} />
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 3,
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    detailsContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    brandName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    moduleName: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    detailText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10, 
    },

    text: {
        fontSize: 16,
        marginBottom: 3,

    },
    statusContainer: {
        alignItems: 'center',
        marginTop: 6,
    },
    status: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#022E1F',
    },
    btnView: {
        padding: 10,
    },
    btn: {
        borderRadius: 10,
        width: "100%",
        fontSize: 18,
    },
});
