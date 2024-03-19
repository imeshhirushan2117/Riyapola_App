import React from 'react';
import { Text } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import DesignButton from '../../common/DesignButton/DesignButton';

import rent_car_2 from '../../assets/img/rent_car_2.jpg';

export default function CarInformation({navigation}) {

  const reservationNow = () => {
   console.log("resavation now button ");
  }

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <View style={styles.imageContainer}>
          <Image source={rent_car_2} style={styles.image} />
        </View>

        <View style={styles.carDetails}>
          <Text variant="headlineLarge" style={styles.carName}>MITSUBISHI MONTERO SPORT</Text>
          <View style={styles.detailItem}>
            <Text variant="titleMedium" style={styles.detailLabel}>Fuel Type:</Text>
            <Text variant="titleMedium">Diesel</Text>
          </View>
          <View style={styles.detailItem}>
            <Text variant="titleMedium" style={styles.detailLabel}>Transmission type:</Text>
            <Text variant="titleMedium">Auto</Text>
          </View>
          <View style={styles.detailItem}>
            <Text variant="titleMedium" style={styles.detailLabel}>No of passengers:</Text>
            <Text variant="titleMedium">7</Text>
          </View>
          <View style={styles.detailItem}>
            <Text variant="titleMedium" style={styles.detailLabel}>Kilometers Traveled:</Text>
            <Text variant="titleMedium">53000Km</Text>
          </View>
          <View style={styles.detailItem}>
            <Text variant="titleMedium" style={styles.detailLabel}>Daily Rental Price:</Text>
            <Text variant="titleMedium">Rs.5000.00</Text>
          </View>
          <View style={styles.detailItem}>
            <Text variant="titleMedium" style={styles.detailLabel}>Daily Limit Kilometers:</Text>
            <Text variant="titleMedium">100Km</Text>
          </View>
          <View style={styles.detailItem}>
            <Text variant="titleMedium" style={styles.detailLabel}>Extra Km:</Text>
            <Text variant="titleMedium">Rs.40.00</Text>
          </View>
        </View>

        <View style={styles.btnView}>
          <DesignButton
            style={styles.btn}
            buttonColor={'#A50010'}
            textColor={'white'}
            rippleColor={'#64000A'}
            label={'Reservation Now'}
            onPress={reservationNow}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding:20
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  carDetails: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  carName: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  btnView: {
    padding: 15,
  },
  btn: {
    borderRadius: 10,
    width: '100%',
    fontSize: 18,
  },
});
