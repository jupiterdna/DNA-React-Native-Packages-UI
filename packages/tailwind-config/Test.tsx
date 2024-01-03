import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn'

const Testss = () => {

    const tw = useTailwind()
  return (
    <View style={tw('bg-red-200' )}>
      <Text style={{color:'red'}}>Tests</Text>
    </View>
  )
}

export default Testss