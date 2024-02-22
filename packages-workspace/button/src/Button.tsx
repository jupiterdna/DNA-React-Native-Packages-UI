import React, { createElement, useCallback } from "react";
import {
  Pressable,
  ActivityIndicator,
  View,
  useColorScheme
} from "react-native";
import { buttonSizeCls, textSizeCls, styles } from './styles';
import { DNAButtonProps } from './types';
import { borderRadiusCls } from "@rndna/base_style";
import { darkmodeColor, useColor } from "@rndna/theme-provider"
import { DNAText } from "@rndna/text";
import RippleComponent from "./RippleComponent/RippleComponent";

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
      onPress,
      rippleColor = 'rgb(250, 250, 250)',
      rippleOpacity = 0.5,
      rippleDuration = 400,
      rippleSize = 400,
      rippleCentered = false,
      rippleSequential = false,
      rippleFades = true,
      enableRipple = true,
      ...restProps
    }: DNAButtonProps,
    ref: React.Ref<View>,
  ) => {

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];
  const secondaryColor = themeColor[color][100];
  const useDarkColor = darkmodeColor[color]["default"];
  const colorScheme = useColorScheme();

  const colorVariant = () => {
    if (colorScheme === "light") {
      if (variant === "solid") {
        return "white";
      } else {
        return defaultColor;
      }
    } else {
      if (variant === "solid") {
        return secondaryColor;
      } else {
        return useDarkColor;
      }
    }
  }

  const getTextColor = {
    color: colorVariant(),
  };
  
  const iconBtnSizes = {
      width: buttonSizeCls[size].height,
      height: buttonSizeCls[size].height,
      paddingHorizontal: 0,
  };

  const getVariantStyle = () => {
    return {
      solid: { backgroundColor: defaultColor },
      outlined: { borderWidth: 1, borderColor: defaultColor, backgroundColor: 'transparent' },
      flat: {},
      soft: { backgroundColor: colorScheme === 'light' ? useDarkColor : secondaryColor },
    }[variant];
  };

  const getIconPositionStyle = () => {
    return iconPosition === 'right' ? styles.buttonIconRight : styles.buttonIconLeft
  }
  /**
   * This function is created to handle the rendering of the icon in the button component.
   * 
   * This function is memoized using useCallback to avoid unnecessary re-renders. It will only re-compute when any of the dependencies change.
   * 
   * @returns A function that returns a React component (JSX.Element) or undefined.
   */
  const _renderIcon = useCallback((): React.JSX.Element | undefined => {
    let iconSize;
    if (variant === 'flat' && !label) {
      iconSize = (textSizeCls[size].fontSize || -1) + 15;
    } else {
      iconSize = (textSizeCls[size].fontSize || -1) + 7;
    }
    
    return typeof icon === "function"
      ? createElement(icon, {
          size: iconSize,
          color: colorVariant(),
        })
      : icon;
  }, [icon, size, colorVariant, variant, label])
  
  /**
   * This function is created to map the `size` prop of the button to a corresponding text size.
   * The `size` prop can have one of five values. Each of these values corresponds to a different text size respectively.
   * 
   * 
   * @returns A function that returns a string that represents the text size.
   */
  const getTextSize = useCallback((): 
    | "caption" 
    | "body2" 
    | "body1" 
    | "label" 
    | "h6" => {
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
  },[size])

  /**
   * This function is created to handle the rendering of the icon or loading indicator in the button component.
   * 
   * 
   * @returns A function that returns a loading indicator as React JSX Element or icon or false
   */
  const _renderIconState = useCallback((): false | React.JSX.Element | undefined => {
    return (
      isLoading ? (
        <View style={styles.loadingSize}>
          <ActivityIndicator color={colorVariant()} /> 
        </View>
      ) : !!icon && _renderIcon() )
  }, [isLoading, icon, colorVariant, size, variant])

  const _renderLabel = useCallback((): React.JSX.Element => {
    const labelValue = loadingLabel && isLoading ? loadingLabel : label

    return (
      <DNAText style={getTextColor} type={getTextSize()}>
        {labelValue}
      </DNAText>
    )
  }, [getTextColor, loadingLabel, isLoading, label])

  /**
 * This function is created to handle the rendering of the button content.
 * This function is memoized using useCallback to avoid unnecessary re-renders. It will only re-compute when any of the dependencies change.
 * 
 * @returns A function that returns a React component (JSX.Element) representing the button content.
 */
  const _getButtonContent = useCallback((): React.JSX.Element => {
    const ButtonComponent = enableRipple ? View : Pressable;

    return (
      <ButtonComponent
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
        disabled={enableRipple ? undefined : (isDisabled || isLoading)}
        onPress={enableRipple ? undefined : onPress}
        ref={ref}
      >
        {_renderIconState()}
        {_renderLabel()}
      </ButtonComponent>
    );
  }, [
    enableRipple, 
    loadingLabel, 
    label, 
    iconBtnSizes,
    getIconPositionStyle,
    getVariantStyle,
    borderRadius,
    size,
    fullWidth,
    isDisabled,
    isLoading,
    onPress,
    ref,
    _renderIconState,
    _renderLabel
  ]);
  
  return enableRipple ? (
    <RippleComponent 
      onPress={onPress} 
      rippleColor={rippleColor}
      rippleOpacity={rippleOpacity}
      rippleDuration={rippleDuration}
      rippleSize={rippleSize}
      rippleCentered={rippleCentered}
      rippleSequential={rippleSequential}
      rippleFades={rippleFades}
      disabled={isDisabled || isLoading}
      >
      {_getButtonContent()}
    </RippleComponent>
  ) : (
    _getButtonContent()
  );
});
