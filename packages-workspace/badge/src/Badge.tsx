import { View, ViewStyle, useColorScheme } from "react-native";
import React, { useCallback, useState } from "react";
import { DNABadgeProps } from "./types";
import { styles } from "./styles";
import { useColor } from "@rndna/theme-provider";
import { DNAText } from "@rndna/text";

/**
 * A badge is component that the user display a text with custom background color relative to the position of the children.
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

export const DNABadge: React.FC<DNABadgeProps> = React.forwardRef(
  (
    {
      children, 
      value,
      style, 
      color = "primary", 
      position = "top",
      ...restProps
    }: DNABadgeProps,
    ref: React.Ref<View>,
  ) => {

    const [badgeWidth, setBadgeWidth] = useState(0);

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

    const onBadgeWrapperLayout = (event: any) => {
      setBadgeWidth(event.nativeEvent.layout.width);
    };

    /**
     * Returns a style object if the 'position' prop is 'inline', otherwise returns null.
     *
     * @returns A style object with specific properties if 'position' is 'inline', or null otherwise.
     */
    const getSpace = () => {
      let leftValue;
      if (position !== 'inline') {
        leftValue = badgeWidth - 8;
      } else {
        leftValue = null;
      }

      if (!!value) {
        return [{ left: leftValue }, styles.badgeSpace];
      } 
      return styles.badgeSize;
    };
  
    /**
     * Returns a memoized function that provides the style object based on the 'position' prop.
     *
     * @returns A function that returns a style object. The function is re-computed when 'position' changes.
     */
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

    /**
     * Returns a memoized function that renders the badge text.
     *
     * @returns A function that returns a React component (JSX.Element) or null. The function is re-computed when any of the dependencies change.
     */
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
    }, [
      getPosition, 
      getDefaultBgColor, 
      getSpace, 
      style, 
      getTextColor, 
      value
    ]);

    /**
     * Returns a style object if the 'position' prop is 'inline', otherwise returns null.
     *
     * @returns A style object with specific properties if 'position' is 'inline', or null otherwise.
     */
    const getPosInline = (): ViewStyle | null => {
      if (position === 'inline') {
        return { flexDirection: 'row', alignItems: 'center', gap: 8} 
      } 
      return null
    }
      
    return (
      <View 
      style={ getPosInline()} 
      onLayout={onBadgeWrapperLayout}
      ref={ref}
      {...restProps}
      >
        {children}
        {_renderBadgeText()}
      </View>
    );
  },
);