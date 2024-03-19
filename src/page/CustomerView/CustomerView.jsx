import React, {useState} from 'react';
import { Card, Text } from 'react-native-paper';
import { View, Image, StyleSheet } from 'react-native';
import DesignButton from '../../common/DesignButton/DesignButton';
import CustomerDilogBox from '../../common/CustomerDilogBox/CustomerDilogBox'
import rent_car_1 from '../../assets/img/rent_car_1.jpg';

export default function CustomerView() {

    const [visible , setVisible] = useState(false)

    const hideDialog = () => {
        setVisible(false)
    }

    const information = () => {
        setVisible(true)
        console.log('customerView');
    }

  return (
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
                <CustomerDilogBox onDismiss={hideDialog}  visible={visible}/>
            </Card.Content>
        </Card>
  )
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
      padding: 10,
  },
  brandName: {
      fontSize: 20,
      fontWeight: 'bold',
  },
  moduleName: {
      fontSize: 18,
      marginBottom: 5,
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
      fontSize: 18,
      fontWeight: 'bold',
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
