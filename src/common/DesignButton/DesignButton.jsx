import React from 'react'
import { Button } from 'react-native-paper';

export default function DesignButton({ label, buttonColor, textColor, rippleColor,onPress,style,disabled }) {
  return (
    <Button
      mode="contained-tonal"
      buttonColor={buttonColor}
      textColor={textColor}
      rippleColor={rippleColor}
      onPress={onPress}
      style={style}
      disabled={disabled}
    >
      {label}
    </Button>
  )
}