import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';


export default function TextField({value,onChange ,style , label, type}) {
  return (
       <TextInput
       label={label}
       mode='outlined'
       outlineColor='#2367A9'
       activeOutlineColor='#2367A9'
       value={value}
       onChangeText={onChange}
       style={style}
       secureTextEntry={type === 'password'}
    />
  )
}