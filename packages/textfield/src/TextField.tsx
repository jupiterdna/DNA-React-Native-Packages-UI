import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

export type TextFieldProps = TextInputProps

export const TextField = (props: TextFieldProps) => {
  return (
    <View>
      <TextInput {...props}/>
    </View>
  )
}

