import React, { useEffect, useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import instance from '../../services/Axious';
import CustomerVehicleCard from '../../common/CustomerVehicleCard/CustomerVehicleCard';
import CustomerDilogBox from '../../common/CustomerDilogBox/CustomerDilogBox';


export default function CustomerView({ navigation }) {

    const [visible, setVisible] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        getAllVehicle()
    }, [])

    const hideDialog = () => {
        setVisible(false)
    }

    const information = () => {
        setVisible(true)
        console.log('customerView');
    }

    const getAllVehicle = () => {
        instance({
            method: 'get',
            url: '/customer/getAllVehicles',
        })
            .then(function (response) {
                const array = [];
                console.log(response);
                response.data.forEach(val => {
                    array.push({
                        id: val.vehicleId,
                        brandName: val.brandName,
                        moduleName: val.moduleName,
                        passengers: val.passenger,
                        type: val.fuelType,
                        transmission: val.transmissionType,
                        passengers: val.passengers,
                        status: val.status,
                    })
                })
                setData(array)
            }).catch(err => {
                console.log(err);
            })
    }


    return (
        <View style={styles.mainView}>

            <View style={styles.textView}>
                <Text style={styles.text} variant="titleLarge">Choose Your</Text>
                <Text style={styles.text2} variant="titleLarge"> Vehicle</Text>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <CustomerVehicleCard
                        img={item.rent_car_1}
                        brandName={item.brandName}
                        moduleName={item.moduleName}
                        type={item.type}
                        transmission={item.transmission}
                        passengers={item.passengers}
                        status={item.status}
                        onPress={() => information(item.id)}
                    />
                )}
            />

            <View>
                <CustomerDilogBox naviHome={() => { navigation.navigate('Login') }} onDismiss={hideDialog} visible={visible} />
            </View>


            {/* <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.imageContainer}>
                    <Image source={rent_car_1} style={styles.image} />
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.brandName}>BMW</Text>
                    <Text style={styles.moduleName}>Car</Text>
                    <Text style={styles.text}>Fuel Type:</Text>
                    <Text style={styles.text}>Transmission: </Text>
                    <Text style={styles.text}>Capacity:passengers</Text>
                </View>

                <View style={styles.statusContainer}>
                    <Text style={styles.status}>status</Text>
                </View>

                <View style={styles.btnView}>
                    <DesignButton
                        style={styles.btn}
                        buttonColor={'#005188'}
                        textColor={'white'}
                        rippleColor={'#007ACC'}
                        label={'More Information Customer'}
                        onPress={information}
                    />
                </View>
                <CustomerDilogBox naviHome={() => { navigation.navigate('Login') }} onDismiss={hideDialog} visible={visible} />
            </Card.Content>
        </Card> */}


        </View>
    )
}


const styles = StyleSheet.create({
    mainView: {
        padding: 15,
    },

    textView: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
    },
    text2: {
        fontWeight: 'bold',
        color: '#A50010',
    },
});
