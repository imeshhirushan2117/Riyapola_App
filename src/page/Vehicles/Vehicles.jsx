import { View, StyleSheet, ScrollView ,ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import VehicleCard from '../../common/VehicleCard/VehicleCard';
import rent_car_1 from '../../assets/img/rent_car_1.jpg';
import rent_car_2 from '../../assets/img/rent_car_2.jpg';

export default function Vehicles({navigation}) {

  const [loading, setLoading] = useState(false);

  const moreInformation = () => {
      setLoading(true);
      setTimeout(() => {
          console.log("Navigating to login page...");
          navigation.navigate('Information')
          setLoading(false);
      }, 1000);
  }

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <VehicleCard
        img={rent_car_1}
        brandName={'MITSUBISHI'}
        moduleName={'MONTERO SPORT'}
        type={'Diesel'}
        transmission={'Auto'}
        passengers={'7'}
        status={'Available Now'}
        onPress={moreInformation}
        />
      </View>


      <View style={styles.mainView}>
        <VehicleCard
        img={rent_car_2}
        brandName={'MITSUBISHI'}
        moduleName={'MONTERO SPORT'}
        type={'Diesel'}
        transmission={'Auto'}
        passengers={'7'}
        status={'Not Available Now'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
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
