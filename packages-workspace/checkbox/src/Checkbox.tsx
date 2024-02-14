import React, { useCallback } from 'react';
import { View, Pressable, GestureResponderEvent, useColorScheme } from 'react-native';
import { DNACheckboxProps } from './types';
import { buttonSizeCls, styles } from './styles';
import { DNAText } from '@rndna/text';
import { CheckSmallIcon } from '@rndna/icon';
import { useColor } from '@rndna/theme-provider';

/**
 * This component meant for easy selection and decision-making. 
 * By convention, only one button at a time can be selected
 * 
 * ## Usage
 * ```js
 * import * as React, { useState } from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { DNACheckbox } from '@rndna/Checkbox';
 *
 * const MyComponent = () => {
 *  //Sample options
 *  const [options, setOptions] = useState([
 *    {id: '1', label: 'Option 1', checked: true},
 *    {id: '2', label: 'Option 2', checked: false},
 *    {id: '3', label: 'Option 3', checked: false},
 *  ]);
 *  
 * const handleCheckboxPress = (id: string) => {
 *   setCoptions(prevOptions =>
 *     prevOptions.map(option => ({
 *       ...option,
 *       checked: option.id === id ? !option.checked : option.checked,
 *     })),
 *   );
 * };
 *    
 *  return (
 *    <View style={styles.gap}>
 *       {options.map(option => (
 *         <DNACheckbox
 *           key={option.id}
 *           id={option.id}
 *           checked={options.checked}
 *           label={option.label}
 *           onPress={() => handleCheckboxPress(option.id)}
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


export const DNACheckbox: React.FC<DNACheckboxProps> = React.forwardRef(
  (
    {
      label,
      disabled = false,
      size = 'md',
      checked = false,
      id,
      onPress,
      ...restProps
    }: DNACheckboxProps,
    ref: React.Ref<View>,
  ) => {
    
  const themeColor = useColor();
  const primaryColor = themeColor["primary"]["default"];
  const defaultColor = themeColor["default"][900];
  const disabledColor = themeColor["default"][400];
  const secondaryColor = themeColor["primary"][100];

  const checkColor = useColorScheme() === "light" ? "white" : secondaryColor;

  const getTextSize = useCallback((): "overline" | "caption" | "body2" | "body1" | "label" => {
    switch(size) {
      case 'xs': 
        return 'overline'
      case 'sm':
        return 'caption'
      case 'md':
        return 'body2'
      case 'lg':
        return 'body1'
      case 'xl':
        return 'label'
      default: 
        return 'body2'
    }
  },[size])

  const checkBtnCls = 
    checked 
      ? { backgroundColor: disabled ? disabledColor : primaryColor }
      : { borderWidth: 1, backgroundColor: "transparent", borderColor: disabled ? disabledColor : defaultColor}
      
  const handlePress = (event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event);
    }
  };

  const _renderCheckBox = useCallback((): React.JSX.Element => {
    return (
      <View style={[ styles.innerWrapper, buttonSizeCls[size], checkBtnCls]}>
        { checked ? 
          <CheckSmallIcon 
            size={buttonSizeCls[size]?.width} 
            color={checkColor} 
          /> 
          : null }
      </View>
    )
  },[size, checked, checkColor, checkBtnCls])

  const _renderCheckBoxLabel = useCallback((): React.JSX.Element => {
    return (
      <DNAText type={getTextSize()} style={disabled && {color: disabledColor }}>
        {label}
      </DNAText>
    )
  },[disabled, disabledColor, label, getTextSize()])

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
});
