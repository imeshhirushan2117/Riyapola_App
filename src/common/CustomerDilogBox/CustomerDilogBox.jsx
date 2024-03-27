import * as React from 'react';
import { Dialog, Portal, } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import DesignButton from '../../common/DesignButton/DesignButton';
import rent_car_2 from '../../assets/img/rent_car_2.jpg';
import { useEffect , useState} from 'react';
import instance from '../../services/Axious';

export default function CustomerDilogBox({ visible, onDismiss, naviHome , id }) {


  const [brandName, setBrandName] = useState("")
  const [moduleName, setModuleName] = useState("")
  const [fuelType, setFuelType] = useState("")
  const [trType, setTrType] = useState("")
  const [passengers, setPassengers] = useState("")
  const [drPrice, setDrPrice] = useState("")
  const [limit, setLimit] = useState("")
  const [extraKm, setExtraKm] = useState("")

  useEffect(() => {
    allVehicles()
  }, [])

  const allVehicles = () => {
    console.log("============== id == " +id);
    instance({
      method: 'get',
      url: '/customer/getVehicleInformationForCustomer/' + id,
    })
      .then(function (response) {
        console.log(response.data[0]);
        setBrandName(response.data[0].brandName)
        setModuleName(response.data[0].moduleName)
        setFuelType(response.data[0].fuelType)
        setTrType(response.data[0].transmissionType)
        setPassengers(response.data[0].passengers)
        setDrPrice(response.data[0].dailyRentalPrice)
        setLimit(response.data[0].dailyLimitKilometers)
        setExtraKm(response.data[0].extraKm)
      }).catch(err => {
        console.log(err);
      })
  }

  const reservationNow = () => {
    naviHome();
    onDismiss();
  }

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <ScrollView>
          <View style={styles.mainView}>
            <View style={styles.imageContainer}>
              <Image source={rent_car_2} style={styles.image} />
            </View>

            <View style={styles.carDetails}>
              <Text variant="headlineLarge" style={styles.carName}>{brandName} {moduleName}</Text>
              <View style={styles.detailItem}>
                <Text variant="titleMedium" style={styles.detailLabel}>Fuel Type:</Text>
                <Text variant="titleMedium">{fuelType}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text variant="titleMedium" style={styles.detailLabel}>Transmission type:</Text>
                <Text variant="titleMedium">{trType}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text variant="titleMedium" style={styles.detailLabel}>No of passengers:</Text>
                <Text variant="titleMedium">{passengers}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text variant="titleMedium" style={styles.detailLabel}>Daily Rental Price:</Text>
                <Text variant="titleMedium">{drPrice}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text variant="titleMedium" style={styles.detailLabel}>Daily Limit Kilometers:</Text>
                <Text variant="titleMedium">{limit}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text variant="titleMedium" style={styles.detailLabel}>Extra Km:</Text>
                <Text variant="titleMedium">{extraKm}</Text>
              </View>
            </View>

            <View style={styles.btnView}>
              <DesignButton
                style={styles.btn}
                buttonColor={'#A50010'}
                textColor={'white'}
                rippleColor={'#64000A'}
                label={'Reservation Now Customer '}
                onPress={reservationNow}
              />
            </View>
          </View>
        </ScrollView>
      </Dialog>
    </Portal>
  )
}

const styles = StyleSheet.create({
  mainView: {
    padding: 20
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