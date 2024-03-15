import { View} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';


export default function LoginPage() {
    return (
        <View>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}