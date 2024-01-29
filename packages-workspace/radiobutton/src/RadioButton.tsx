import React from 'react';
import { View, Text, Pressable, GestureResponderEvent } from 'react-native';
import { DNARadioButtonProps } from './types';
import { buttonSizeCls, styles, textSizeCls } from './styles';


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
