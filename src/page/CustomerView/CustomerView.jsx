import React, { useEffect, useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import instance from '../../services/Axious';
import CustomerVehicleCard from '../../common/CustomerVehicleCard/CustomerVehicleCard';
import CustomerDilogBox from '../../common/CustomerDilogBox/CustomerDilogBox';


export default function CustomerView({ navigation }) {

    const [visible, setVisible] = useState(false)
    const [data, setData] = useState([])
    const [selectId, setSelectId] = useState()

    useEffect(() => {
        getAllVehicle()
    }, [])


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



    const hideDialog = () => {
        setVisible(false)
    }

    const information = (id) => {
        setSelectId(id)
        setVisible(true) 
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
                <CustomerDilogBox naviHome={() => { navigation.navigate('Login') }} onDismiss={hideDialog} visible={visible}  id={selectId}/>
            </View>
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
