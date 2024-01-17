import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { DNABadgeProps } from './types'
import { styles } from './styles'
import { useColor } from "@rndna/theme-provider"

/**
 * A badge is component that the user display a text with custom background color on the upper right hand of the children.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, Text } from 'react-native';
 * import { DNABadge } from '@rndna/badge';
 *
 * const ComponentName = () => (
 *  <DNABadge value="badgeText" size="sm">
 *     <View>
 *       <Text>Hello World!</Text>
 *    </View>
 *  </DNABadge>
 * );
 *
 * export default ComponentName;
 * ```
 */

export const DNABadge = (props: DNABadgeProps) => {
  const { children, value, style, color = 'primary' } = props
  const [badgeWidth, setBadgeWidth] = useState(0);
  
  const onBadgeWrapperLayout = (event: any) => {
    setBadgeWidth(event.nativeEvent.layout.width);
  };

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];

  const backgroundColor = () => {
    return { backgroundColor: defaultColor }
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