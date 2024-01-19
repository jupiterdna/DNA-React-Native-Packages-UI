import React, { createElement } from "react";
import { useColorScheme } from "react-native";
import {
  Pressable,
} from "react-native";
import { chipSizeCls, textSizeCls, styles, borderRadiusCls } from './styles';
import { DNAChipProps } from './types';
import { useColor } from "@rndna/theme-provider";
import { DNAText } from "@rndna/text";
import { CloseSmallIcon } from "@rndna/icon";

/**
 * A Chip to show content with all the props inside a Component.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAChip } from '@rndna/chip';
 * import { UserIcon } from '@rndna/icon';
 *
 * const ComponentName = () => (
 *  <DNAChip
 *    label="Chip"
 *    isClosable
 *    isLoading
 *    icon={UserIcon}
 *    size="md"
 *    onPress={() => console.log('pressed')}
 *    onPressClose={() => console.log('closed')}
 *    />
 * );
 *
 * export default ComponentName;
 * ```
 */

export const DNAChip = (props: DNAChipProps) => {
  const {
    label = 'Chip',
    icon,
    variant = "solid",
    size = "md",
    isClosable = false,
    isDisabled = false,
    color = "primary",
    onPress,
    onPressClose,
    borderRadius = "rounded",
  } = props;

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];
  const useDarkColor = themeColor[color][100];

  const colorVariant = 
    useColorScheme() === 'light'
      ? variant === 'solid' ? 'white' : defaultColor
      : variant === 'solid' ? useDarkColor : defaultColor

  const getTextColor = {
    color: colorVariant
  };
  
  const getVariantStyle = () => {
    return {
      solid: { backgroundColor: defaultColor },
      outlined: { borderWidth: 1, borderColor: defaultColor, backgroundColor: 'transparent' },
      soft: {},
    }[variant];
  };

  const renderIcon =
      typeof icon === "function"
        ? createElement(icon, {
            size: textSizeCls[size].fontSize,
            color: colorVariant
          })
        : icon

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

  const addSpace = { paddingLeft: chipSizeCls[size].paddingHorizontal + 2 }
  
  return (
    <Pressable
      style={[
        styles.chip, 
        getVariantStyle(), 
        borderRadiusCls[borderRadius],
        chipSizeCls[size],
        isClosable && addSpace,
        isDisabled && styles.buttonDisabled,
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      {!!icon && renderIcon}
      <DNAText style={getTextColor} type={getTextSize()}>{label}</DNAText>
      {isClosable && 
        <Pressable onPress={onPressClose} disabled={isDisabled}>
          <CloseSmallIcon size={textSizeCls[size].fontSize} color={colorVariant} />
        </Pressable>
      }
    </Pressable>
  );
};