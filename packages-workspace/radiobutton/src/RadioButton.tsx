import React from 'react';
import { View, Pressable, GestureResponderEvent } from 'react-native';
import { DNARadioButtonProps } from './types';
import { buttonSizeCls, styles } from './styles';
import { DNAText } from '@rndna/text';
import { CircleIcon } from '@rndna/icon';
import { useColor } from '@rndna/theme-provider';

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
 *    // Display selected option
 *    <Text>Selected Option: {options.find((option) => option.checked)?.id}</Text>
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


export const DNARadioButton: React.FC<DNARadioButtonProps> = React.forwardRef(
  (
    {
      label,
      disabled = false,
      size = 'md',
      checked = false,
      id,
      onPress,
      ...restProps
    }: DNARadioButtonProps,
    ref: React.Ref<any>,
  ) => {

  const themeColor = useColor();
  const defaultColors = themeColor["primary"]["default"];

  const calculatedButtonSize = {
    width: buttonSizeCls[size]?.width - 6,
    height: buttonSizeCls[size]?.height - 6,
  };

  const handlePress = (event: GestureResponderEvent) => {
    if (onPress) {
      onPress(event);
    }
  };

  const getTextSize = () => {
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
  }

  return (
    <Pressable
      {...restProps}
      ref={ref}
      key={id}
      style={[
        styles.radio,
        disabled || disabled ? styles.disabled : null,
      ]}
      disabled={disabled || disabled}
      onPress={handlePress}
    >
      <View style={[styles.radioInner, buttonSizeCls[size]]}>
        { checked ? <CircleIcon size={buttonSizeCls[size]?.width - 4} color={defaultColors}/> : null }
      </View>
      <DNAText type={getTextSize()}>{label}</DNAText>
    </Pressable>
  );
});
