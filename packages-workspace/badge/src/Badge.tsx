import { View, ViewStyle, useColorScheme } from "react-native";
import React, { useCallback, useState } from "react";
import { DNABadgeProps } from "./types";
import { styles } from "./styles";
import { useColor } from "@rndna/theme-provider";
import { DNAText } from "@rndna/text";

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
  const { children, value, style, color = "primary", position = "top" } = props;
  const [badgeWidth, setBadgeWidth] = useState(0);

  const onBadgeWrapperLayout = (event: any) => {
    setBadgeWidth(event.nativeEvent.layout.width);
  };

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];
  const useDarkColor = themeColor[color][100];

  const colorVariant = useColorScheme() === "light" ? "white" : useDarkColor;

  const getTextColor = {
    color: colorVariant,
  };

  const getDefaultBgColor = () => {
    return { backgroundColor: defaultColor };
  };


  const getSpace = () => {
    if (!!value) {
      return [{ left: position !== 'inline' ? (badgeWidth - 8) : null }, styles.badgeSpace];
    } else {
      return styles.badgeSize;
    }
  };
 
  const getPosition = useCallback((): ViewStyle => {
    switch(position) {
      case 'bottom':
        return styles.badgeBottom
      case 'inline':
        return styles.badgeInline
      default: 
        return styles.badgeTop
    }
  },[position])

  const _renderBadgeText = useCallback((): React.JSX.Element | null => {
    return (
      <View
        style={[
          styles.badge,
          getSpace(),
          getDefaultBgColor(),
          getPosition(),
          styles.shadowProp,
          style,
        ]}
      >
        <DNAText type="overline" style={getTextColor}>
          {value}
        </DNAText>
      </View>
    );
  }, [getPosition, getDefaultBgColor, getSpace, style, getTextColor, value]);

  const getPosInline = (): ViewStyle | null => {
    return position === 'inline' ? { flexDirection: 'row', alignItems: 'center', gap: 8 } : null;
  }
  
  return (
    <View style={ getPosInline()} onLayout={onBadgeWrapperLayout}>
      {children}
      {_renderBadgeText()}
    </View>
  );
};
