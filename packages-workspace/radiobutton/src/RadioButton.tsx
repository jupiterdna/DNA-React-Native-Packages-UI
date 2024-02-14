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
 *  //Sample options
 *  const [options, setOptions] = useState([
 *    {id: '1', label: 'Option 1', checked: true},
 *    {id: '2', label: 'Option 2', checked: false},
 *    {id: '3', label: 'Option 3', checked: false},
 *  ]);
 *
 * const handleRadioButtonPress = (id: string) => {
 *   setOptions(prevOptions =>
 *     prevOptions.map(option => ({
 *       ...option,
 *       checked: option.id === id,
 *     })),
 *   );
 * };
 *
 *  return (
 *    <View style={styles.gap}>
 *       {options.map(option => (
 *         <DNARadioButton
 *           key={option.id}
 *           id={option.id}
 *           checked={options.checked}
 *           label={option.label}
 *           onPress={() => handleRadioButtonPress(option.id)}
 *         />
 *       ))}
 *    </View>
 *   );
 * };
 *
 * const styles = StyleSheet.create({
 *    gap: {
 *      marginBottom: 8,
 *      gap: 4,
 *      justifyContent: 'center',
 *      alignItems: 'center',
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

    const getTextSize = useCallback((): "overline" | "caption" | "body2" | "body1" | "label" => {
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

    const getDisabledColor = disabled ? disabledColor : primaryColor;

    const radioBorderStyle = checked
      ? { borderColor: disabled ? disabledColor : primaryColor }
      : { borderColor: disabled ? disabledColor : defaultColor };

    const handlePress = (event: GestureResponderEvent) => {
      if (onPress) {
        onPress(event);
      }
    };

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

    const _renderRadioLabel = useCallback((): React.JSX.Element => {
      return (
        <DNAText type={getTextSize()} style={disabled && { color: disabledColor }}>
          {label}
        </DNAText>
      )
    },[disabled, disabledColor, label, getTextSize()])

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
