import React, { useCallback } from "react";
import { View, Pressable, GestureResponderEvent } from "react-native";
import { DNARadioButtonProps } from "./types";
import { buttonSizeCls, styles } from "./styles";
import { DNAText } from "@rndna/text";
import { CircleIcon } from "@rndna/icon";
import { useColor } from "@rndna/theme-provider";

/**
 * This component meant for easy selection and decision-making.
 * By convention, only one button at a time can be selected
 *
 * ## Usage
 * ```js
 * import * as React, { useState } from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { DNARadioButton } from '@rndna/radiobutton';
 *
 * const MyComponent = () => {
 *  return (
 *    <View style={styles.style}>
 *         <DNARadioButton
 *           key={1}
 *           id={1}
 *           checked={false}
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

const DNARadioButton: React.FC<DNARadioButtonProps> = React.forwardRef(
  (
    {
      label,
      disabled = false,
      size = "md",
      checked = false,
      id,
      onPress,
      ...restProps
    }: DNARadioButtonProps,
    ref: React.Ref<View>
  ) => {
    const themeColor = useColor();
    const primaryColor = themeColor["primary"]["default"];
    const defaultColor = themeColor["default"][900];
    const disabledColor = themeColor["default"][400];
    const getDisabledColor = disabled ? disabledColor : primaryColor;

    const radioBorderStyle = checked
    ? { borderColor: disabled ? disabledColor : primaryColor }
    : { borderColor: disabled ? disabledColor : defaultColor };

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
    },[size]);

     /**
     * This function is created to handle the rendering of the radiobutton.
     * It returns a `View` component with various styles. The styles are determined by the `size` prop and the `buttonSizeCls` variable.
     * 
     *  @returns A function that returns a JSX.Element that indicates that radiobutton is checked.
     */
    const _renderRadioButton = useCallback((): React.JSX.Element => {
      return (
        <View style={[styles.radioInner, buttonSizeCls[size], radioBorderStyle]}>
          { checked ? 
            <CircleIcon
              size={buttonSizeCls[size]?.width - 4}
              color={getDisabledColor}
            />
           : null }
        </View>
      )
    }, [size, checked, getDisabledColor, radioBorderStyle])

    /**
     * This function is created to handle the rendering of the radiobutton label.
     * It returns a `DNAText` component with the `type` prop set to the result of the `getTextSize` function
     * 
     * @returns A function that returns a JSX.Element that represents the label of the radiobutton.
     */
    const _renderRadioLabel = useCallback((): React.JSX.Element => {
      return (
        <DNAText type={getTextSize()} style={disabled && { color: disabledColor }}>
          {label}
        </DNAText>
      )
    },[disabled, disabledColor, label, getTextSize()])

    /**
     * This function is created to handle the press event of the radiobutton.
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
        style={styles.radio}
        disabled={disabled}
        onPress={handlePress}
      > 
        {_renderRadioButton()}
        {_renderRadioLabel()}
      </Pressable>
    );
  }
);

DNARadioButton.displayName = "DNARadioButton";

export { DNARadioButton };
