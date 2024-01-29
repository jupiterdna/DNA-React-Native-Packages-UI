import React from 'react';
import { View, Text, Pressable, GestureResponderEvent } from 'react-native';
import { DNARadioButtonProps } from './types';
import { buttonSizeCls, styles, textSizeCls } from './styles';

/**
 * This component meant for easy selection and decision-making. 
 * By convention, only one button at a time can be selected
 * 
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View, StyleSheet } from 'react-native';
 * import { DNARadioButton } from '@rndna/radiobutton';
 *
 * const MyComponent = () => {
 *  const options = [
 *    {id: '1', label: 'Option 1'},
 *    {id: '2', label: 'Option 2'},
 *    {id: '3', label: 'Option 3'},
 *  ];
 *  
 *  const handleRadioButtonPress = (id: string) => {
 *    setSelectedOption(id);
 *  };
 *    
 *  return (
 *    <View style={styles.gap}>
 *       {options.map(option => (
 *         <DNARadioButton
 *           key={option.id}
 *           id={option.id}
 *           checked={selectedOption === option.id}
 *           label={option.label}
 *           onPress={() => handleRadioButtonPress(option.id)}
 *         />
 *       ))}
 *    </View>
 *    <Text>Selected Option: {selectedOption}</Text>
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

  const calculatedButtonSize = {
    width: buttonSizeCls[size].width - 6,
    height: buttonSizeCls[size].height - 6,
  };

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
      style={[
        styles.radio,
        disabled || disabled ? styles.disabled : null,
      ]}
      disabled={disabled || disabled}
      onPress={handlePress}
    >
      <View style={[styles.radioInner, buttonSizeCls[size]]}>
        <View style={[calculatedButtonSize, checked ? styles.checked : null]} />
      </View>
      <Text style={textSizeCls[size]}>{label}</Text>
    </Pressable>
  );
});
