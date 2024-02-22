import React, { useCallback } from "react";
import {
  View,
  Pressable,
  GestureResponderEvent,
  useColorScheme,
} from "react-native";
import { DNACheckboxProps } from "./types";
import { buttonSizeCls, styles } from "./styles";
import { DNAText } from "@rndna/text";
import { CheckSmallIcon } from "@rndna/icon";
import { useColor } from "@rndna/theme-provider";

/**
 * This component meant for easy selection and decision-making.
 * By convention, multi buttons can be selected
 *
 * ## Usage
 * ```js
 * import * as React, { useState } from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { DNACheckbox } from '@rndna/Checkbox';
 *
 * const MyComponent = () => {
 *  return (
 *    <View style={styles.style}>
*         <DNACheckbox
*           key={1}
*           id={1}
*           checked={true}
*           label="Option 1"
*           onPress={() => ()}
*         />
 *    </View>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *    style: {
 *      alignItems: 'flex-start';
 *    },
 * });
 *
 * export default MyComponent;
 * ```
 */

export const DNACheckbox: React.FC<DNACheckboxProps> = React.forwardRef(
  (
    {
      label,
      disabled = false,
      size = "md",
      checked = false,
      id,
      onPress,
      ...restProps
    }: DNACheckboxProps,
    ref: React.Ref<View>
  ) => {
    const themeColor = useColor();
    const primaryColor = themeColor["primary"]["default"];
    const defaultColor = themeColor["default"][900];
    const disabledColor = themeColor["default"][400];
    const secondaryColor = themeColor["primary"][100];

    const checkColor = useColorScheme() === "light" ? "white" : secondaryColor;

    const checkBtnCls = checked
    ? { backgroundColor: disabled ? disabledColor : primaryColor }
    : {
      borderWidth: 1,
      backgroundColor: "transparent",
      borderColor: disabled ? disabledColor : defaultColor,
    };

    /**
     * This function is created to map the `size` prop of the button to a corresponding text size.
     * The `size` prop can have one of five values. Each of these values corresponds to a different text size respectively.
     * 
     * @returns A function that returns a string that represents the text size.
     */
    const getTextSize = useCallback(():
      | "overline"
      | "caption"
      | "body2"
      | "body1"
      | "label" => {
      switch (size) {
        case "xs":
          return "overline";
        case "sm":
          return "caption";
        case "md":
          return "body2";
        case "lg":
          return "body1";
        case "xl":
          return "label";
        default:
          return "body2";
      }
    }, [size]);
    
    /**
     * This function is created to handle the rendering of the checkbox.
     * It returns a `View` component with various styles. The styles are determined by the `size` prop and the `checkBtnCls` variable.
     * 
     *  @returns A function that returns a JSX.Element that indicates that checkbox is checked.
     */
    const _renderCheckBox = useCallback((): React.JSX.Element => {
      return (
        <View style={[styles.innerWrapper, buttonSizeCls[size], checkBtnCls]}>
          {checked ? (
            <CheckSmallIcon
              size={buttonSizeCls[size]?.width}
              color={checkColor}
            />
          ) : null}
        </View>
      );
    }, [size, checked, checkColor, checkBtnCls]);

    /**
     * This function is created to handle the rendering of the checkbox label.
     * It returns a `DNAText` component with the `type` prop set to the result of the `getTextSize` function
     * 
     * @returns A function that returns a JSX.Element that represents the label of the checkbox.
     */
    const _renderCheckBoxLabel = useCallback((): React.JSX.Element => {
      return (
        <DNAText
          type={getTextSize()}
          style={disabled && { color: disabledColor }}
        >
          {label}
        </DNAText>
      );
    }, [disabled, disabledColor, label, getTextSize()]);

    /**
     * This function is created to handle the press event of the checkbox.
     * It checks if the `onPress` prop is defined. If it is, it calls the `onPress` function with the `event` argument.
     * 
     * @param event - The event object associated with the press event.
     * 
     * @returns Nothing. The purpose of this function is to call the `onPress` function if it's defined.
     */
    const handlePress = (event: GestureResponderEvent) => {
      if (onPress) {
        onPress(event);
      }
    };

    return (
      <Pressable
        {...restProps}
        ref={ref}
        key={id}
        style={styles.check}
        disabled={disabled}
        onPress={handlePress}
      >
        {_renderCheckBox()}
        {_renderCheckBoxLabel()}
      </Pressable>
    );
  }
);
