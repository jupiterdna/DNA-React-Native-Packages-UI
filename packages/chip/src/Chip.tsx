import React from "react";
import {
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import {chipSizeCls, textSizeCls, styles} from './styles';
import {ChipProps} from './types';
import { borderRadiusCls, defaultColors } from "@dnamobile/base_style";

//Lacking icon component
//Style is not final

export const Chip = (props: ChipProps) => {
  const {
    label = 'Chip',
    icon,
    variant = "solid",
    size = "default",
    isClosable = false,
    isDisabled = false,
    color = "primary",
    onPress,
    onPressClose,
    borderRadius = "rounded",
  } = props;
  
  const getTextColor = () => {
    return variant === 'solid' ? { color: 'white' } : { color: defaultColors[color] };
  };

  const getVariantStyle = () => {
    return {
      solid: { backgroundColor: defaultColors[color] },
      outlined: { borderWidth: 1, borderColor: defaultColors[color], backgroundColor: 'transparent' },
      flat: {},
    }[variant];
  };

  return (
    <TouchableOpacity
      style={[
        styles.chip, 
        getVariantStyle(), 
        borderRadiusCls[borderRadius],
        chipSizeCls[size],
        isDisabled  && styles.buttonDisabled,
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      {icon && <Text style={[styles.icon, getTextColor() ]}>{icon}</Text>}
      <Text style={[textSizeCls[size], getTextColor() ]}>{label}</Text>
      {isClosable && 
        <Pressable onPress={onPressClose} disabled={isDisabled} style={[styles.closeIcon ]}>
          <Text style={getTextColor()}>&times;</Text>
        </Pressable>
      }
    </TouchableOpacity>
  );
};