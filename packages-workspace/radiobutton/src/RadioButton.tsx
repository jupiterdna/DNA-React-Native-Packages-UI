import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { RadioButtonProps, Option, ChildrenOption } from './types';
import { buttonSizeCls, styles, textSizeCls } from './styles';

export const RadioButton = (props: RadioButtonProps) => {
  const {
    label,
    options,
    orientation = 'vertical',
    disabled,
    required = false,
    size = 'md',
    gap_y = 'default',
    gap_x = 'default',
    onChange,
    selected,
  } = props;

  const calculatedButtonSize = {
    width: buttonSizeCls[size].width - 6,
    height: buttonSizeCls[size].height - 6,
  };

  const childIndention = {
    marginLeft: buttonSizeCls[size].width + styles.radioInner.marginRight,
  }
  
  const styleOrientation = orientation === 'vertical' ? styles.vertical : styles.horizontal;

  const getGapStyle = () => {
    const gapStyles = {
      compact: styles.compactGap,
      default: styles.defaultGap,
      comfortable: styles.comfortableGap,
    };
    return {
      marginBottom: orientation === 'vertical' ? gapStyles[gap_y].marginBottom : null,
      marginRight: orientation === 'horizontal' ? gapStyles[gap_x].marginRight : null,
    };
  };

  const renderOption = (option: Option | ChildrenOption, index: number) => {
    
    const lastItem = index === options.length - 1;
    
    return (
      <Pressable
        key={option.id}
        style={[
          getGapStyle(),
          styles.radio,
          disabled || option.disabled ? styles.disabled : null,
        ]}
        onPress={() => onChange(option)}
        disabled={disabled || option.disabled}
      >
        <View style={[styles.radioInner, buttonSizeCls[size]]}>
          <View style={[calculatedButtonSize, selected === option.id || option.checked ? styles.checked : null]} />
        </View>
        <Text style={textSizeCls[size]}>{option.label}</Text>
      </Pressable>
    );
  };

  const renderChildrenOptions = (childrenOptions: ChildrenOption[]) => {
    return childrenOptions.map((childOption, index) => {
      return renderOption(childOption, index);
    });
  };

  return (
    <View style={disabled && styles.disabled}>
      {label && <Text style={styles.label}>{label} {required && '*'}</Text>}
      <View style={styleOrientation}>
        {options.map((option, index) => (
          <View key={option.id}>
            {renderOption(option, index)}
            <View style={childIndention}>
              {option.childrenOptions && renderChildrenOptions(option.childrenOptions)}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
