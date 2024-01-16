import React, { createElement } from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import { buttonSizeCls, textSizeCls, styles } from './styles';
import { DNAButtonProps } from './types';
import { borderRadiusCls } from "@dnamobile/base_style";
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
      size = "default",
      isLoading = false,
      loadingLabel,
      color = "primary",
      variant = "solid",
      isDisabled = false,
      fullWidth = false,
      borderRadius = "soft_edged",
      ...restProps
    }: DNAButtonProps,
    ref: React.Ref<TouchableOpacity>,
  ) => {

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];

  const getTextColor = () => {
    return variant === 'solid' ? { color: 'white' } : { color: defaultColor };
  };

  const getVariantStyle = () => {
    return {
      solid: { backgroundColor: defaultColor },
      outlined: { borderWidth: 1, borderColor: defaultColor, backgroundColor: 'transparent' },
      flat: {},
    }[variant];
  };

  const getIconPositionStyle = () => {
    return iconPosition === 'right' ? styles.buttonIconRight : styles.buttonIconLeft
  }
  const renderIcon =
      typeof icon === "function"
        ? createElement(icon, {
            size: textSizeCls[size].fontSize || -1 + 3,
            color: variant === 'solid' ? "white" : defaultColor,
          })
        : icon
  
  const getTextSize = () => {
    switch(size) {
      case 'sm':
        return 'body2'
      case 'md':
        return 'label'
      case 'lg':
        return 'h6'
      default: 
        return 'body1'
    }
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        (!!loadingLabel || !!label) && styles.gapSize,
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
          <ActivityIndicator color={variant === 'solid' ? 'white' : defaultColor } /> 
        </View>
      ) : (
        !!icon && renderIcon
      )}
      <DNAText style={getTextColor()} type={getTextSize()}>{loadingLabel && isLoading ? loadingLabel : label}</DNAText>
    </TouchableOpacity>
  );
});
