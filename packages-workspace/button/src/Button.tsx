import React, { createElement } from "react";
import {
  Pressable,
  ActivityIndicator,
  View,
  useColorScheme
} from "react-native";
import { buttonSizeCls, textSizeCls, styles } from './styles';
import { DNAButtonProps } from './types';
import { borderRadiusCls } from "@rndna/base_style";
import { useColor } from "@rndna/theme-provider"
import { DNAText } from "@rndna/text";

/**
 * A button is component that the user can press to trigger an action.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAButton } from '@rndna/button';
 *
 * const MyComponent = () => (
 *  <DNAButton 
 *    label="ButtonText" 
 *      onPress={(evt: GestureResponderEvent | undefined) => {
 *      console.log('pressed')
 *     }}
 *  />
 * );
 *
 * export default MyComponent;
 * ```
 */

export const DNAButton: React.FC<DNAButtonProps> = React.forwardRef(
  (
    {
      label,
      icon,
      iconPosition = "left",
      size = "md",
      isLoading = false,
      loadingLabel,
      color = "primary",
      variant = "solid",
      isDisabled = false,
      fullWidth = false,
      borderRadius = "soft_edged",
      ...restProps
    }: DNAButtonProps,
    ref: React.Ref<any>,
  ) => {

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];
  const useDarkColor = themeColor[color][100];

  const colorVariant = 
    useColorScheme() === 'light'
      ? variant === 'solid' ? 'white' : defaultColor
      : variant === 'solid' ? useDarkColor : defaultColor

  const getTextColor = {
    color: colorVariant
  };
  
  const getVariantStyle = () => {
    return {
      solid: { backgroundColor: defaultColor },
      outlined: { borderWidth: 1, borderColor: defaultColor, backgroundColor: 'transparent' },
      flat: {},
      soft: { backgroundColor: useDarkColor},
    }[variant];
  };

  const getIconPositionStyle = () => {
    return iconPosition === 'right' ? styles.buttonIconRight : styles.buttonIconLeft
  }
  const renderIcon = 
      typeof icon === "function"
        ? createElement(icon, {
            size: (textSizeCls[size].fontSize || -1) + 7,
            color: colorVariant
          })
        : icon
  
  const getTextSize = () => {
    switch(size) {
      case 'xs': 
        return 'caption'
      case 'sm':
        return 'body2'
      case 'md':
        return 'body1'
      case 'lg':
        return 'label'
      case 'xl':
        return 'h6'
      default: 
        return 'body1'
    }
  }
  
  const iconBtnSizes = {
      width: buttonSizeCls[size].height,
      height: buttonSizeCls[size].height,
      paddingHorizontal: 0,
  };

  return (
    <Pressable
      style={[
        styles.button,
        (!!loadingLabel || !!label) ? styles.gapSize : iconBtnSizes,
        getIconPositionStyle(),
        getVariantStyle(),
        borderRadiusCls[borderRadius],
        buttonSizeCls[size],
        fullWidth && styles.buttonWidthFull,
        (isDisabled || isLoading) && styles.buttonDisabled,
      ]}
      disabled={isLoading || isDisabled}
      ref={ref}
      {...restProps}
    > 
      {isLoading ? (
        <View style={styles.loadingSize}>
          <ActivityIndicator color={colorVariant} /> 
        </View>
      ) : (
        !!icon && renderIcon
      )}
      <DNAText style={getTextColor} type={getTextSize()}>{loadingLabel && isLoading ? loadingLabel : label}</DNAText>
    </Pressable>
  );
});
