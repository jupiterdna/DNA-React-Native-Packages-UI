import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { DNABadgeProps } from './types'
import { styles } from './styles'
import { defaultColors } from "@dnamobile/base_style";

//Lacking angle icons and standard styling

export const DNABadge = (props: DNABadgeProps) => {
  const { children, value, style, color = 'primary' } = props
  const [badgeWidth, setBadgeWidth] = useState(0);
  
  const onBadgeWrapperLayout = (event: any) => {
    setBadgeWidth(event.nativeEvent.layout.width);
  };

  const backgroundColor = () => {
    return { backgroundColor: defaultColors[color]}
  }

  return (
    <View style={styles.badgeWrapper} onLayout={onBadgeWrapperLayout}>
      <View style={[
          styles.badge, 
          backgroundColor(), 
          !!value ? [{ left: badgeWidth - 5 }, styles.badgeSpace] : styles.badgeSize,
          styles.shadowProp,
          style, 
        ]}>
        {value && <Text style={styles.badgdeText}>{value}</Text>}
      </View>
      {children}
    </View>
  )
}