import React from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  View,
} from "react-native";
import {buttonSizeCls, textSizeCls, styles} from './styles';
import {ButtonProps} from './types';
import {borderRadiusCls, defaultColors} from "@dnamobile/base_style";

//Lacking icon component
//Style is not final

export const Button = (props: ButtonProps) => {
  const {
    label = "Button",
    icon,
    iconPosition = "left",
    size = "default",
    isLoading = false,
    loadingLabel,
    color = "primary",
    variant = "solid",
    isDisabled = false,
    fullWidth = false,
    onPress,
    borderRadius = "soft_edged",
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

  const getIconPositionStyle = () => {
    return iconPosition === 'right' ? styles.buttonIconRight : styles.buttonIconLeft
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getIconPositionStyle(),
        getVariantStyle(),
        borderRadiusCls[borderRadius],
        buttonSizeCls[size],
        fullWidth && styles.buttonWidthFull,
        (isDisabled || isLoading) && styles.buttonDisabled,
      ]}
      onPress={onPress}
      disabled={isLoading || isDisabled}
    > 
      {isLoading ? (
        <View style={[iconPosition === 'left' ? styles.iconLeft : styles.iconRight, styles.loadingSize]} >
          <ActivityIndicator color={variant === 'solid' ? 'white' : defaultColors[color]}/> 
        </View>
      ) : (
        icon && <Text style={[getTextColor(), textSizeCls[size], iconPosition === 'left' ? styles.iconLeft : styles.iconRight]}>{icon}</Text>
      )}
      <Text style={[getTextColor(), textSizeCls[size] ]}>{loadingLabel && isLoading ? loadingLabel : label}</Text>
    </TouchableOpacity>
  );
};

