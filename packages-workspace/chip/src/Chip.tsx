import React, { createElement, useCallback } from "react";
import { useColorScheme, Pressable } from "react-native";
import { chipSizeCls, textSizeCls, styles, borderRadiusCls } from './styles';
import { DNAChipProps } from './types';
import { useColor } from "@rndna/theme-provider";
import { DNAText } from "@rndna/text";
import { CloseSmallIcon } from "@rndna/icon";
import { darkmodeColor } from "@rndna/theme-provider";

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
  const secondaryColor = themeColor[color][100];
  const useDarkColor = darkmodeColor[color]["default"];

  const colorVariant = 
    useColorScheme() === 'light'
      ? variant === 'solid' ? 'white' : defaultColor
      : variant === 'solid' ? secondaryColor : useDarkColor

  const getTextColor = {
    color: colorVariant
  };

  const getVariantStyle = () => {
    return {
      solid: { backgroundColor: defaultColor },
      outlined: { borderWidth: 1, borderColor: defaultColor, backgroundColor: 'transparent' },
      soft: { backgroundColor:  useColorScheme() === 'light' ? useDarkColor : secondaryColor },
    }[variant];
  };

  const _renderIcon = useCallback((): React.JSX.Element | undefined => {
    return !!icon && typeof icon === "function"
      ? createElement(icon, {
          size:  textSizeCls[size].fontSize,
          color: colorVariant,
        })
      : icon;
  }, [icon, size, colorVariant]);

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

  const _renderCloseButton = useCallback((): React.JSX.Element | null => {
    return isClosable ? (
      <Pressable onPress={onPressClose} disabled={isDisabled}>
        <CloseSmallIcon size={textSizeCls[size].fontSize} color={colorVariant} />
      </Pressable>
    ) : null
  },[ isClosable, isDisabled, size, colorVariant, onPressClose ])

  const _renderLabel = useCallback((): React.JSX.Element => {
    return <DNAText style={getTextColor} type={getTextSize()}>{label}</DNAText>
  }, [getTextColor, label])

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
      {_renderIcon()}
      {_renderLabel()}
      {_renderCloseButton()}
    </Pressable>
  );
};