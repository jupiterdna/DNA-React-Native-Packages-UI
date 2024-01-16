import React, { createElement } from "react";
import {
  Text,
  Pressable,
  View,
} from "react-native";
import { chipSizeCls, textSizeCls, styles } from './styles';
import { DNAChipProps } from './types';
import { borderRadiusCls } from "@dnamobile/base_style";
import { useColor } from "@rndna/theme-provider"

export const DNAChip = (props: DNAChipProps) => {
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

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];
  
  const getTextColor = () => {
    return variant === 'solid' ? { color: 'white' } : { color: defaultColor };
  };

  const getVariantStyle = () => {
    return {
      solid: { backgroundColor: defaultColor },
      outlined: { borderWidth: 1, borderColor: defaultColor, backgroundColor: 'transparent' },
      flat: {},
    }[variant];
  };
  
  const renderIcon =
      typeof icon === "function"
        ? createElement(icon, {
            size: textSizeCls[size].fontSize,
            color: variant === 'solid' ? "white" : defaultColor,
          })
        : icon

  return (
    <Pressable
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
      {!!icon && <View>{renderIcon}</View>}
      <Text style={[textSizeCls[size], getTextColor() ]}>{label}</Text>
      {isClosable && 
        <Pressable onPress={onPressClose} disabled={isDisabled}>
          <Text style={[getTextColor(), textSizeCls[size]]}>&times;</Text>
        </Pressable>
      }
    </Pressable>
  );
};