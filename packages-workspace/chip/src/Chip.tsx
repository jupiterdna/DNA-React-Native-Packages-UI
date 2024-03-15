import React, { createElement, useCallback } from "react";
import { useColorScheme, Pressable, View } from "react-native";
import { chipSizeCls, styles, borderRadiusCls } from "./styles";
import { DNAChipProps } from "./types";
import { useColor, useFonts } from "@rndna/theme-provider";
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

export const DNAChip: React.FC<DNAChipProps> = React.forwardRef(
  (
    {
      label = "Chip",
      icon,
      variant = "solid",
      size = "md",
      isClosable = false,
      isDisabled = false,
      color = "primary",
      onPressClose,
      borderRadius = "rounded",
      style,
      ...restProps
    }: DNAChipProps,
    ref: React.Ref<View>
  ) => {
    const themeColor = useColor();
    const font = useFonts();
    const defaultColor = themeColor[color]["default"];
    const secondaryColor = themeColor[color][100];
    const useDarkColor = darkmodeColor[color]["default"];
    const colorScheme = useColorScheme();

    const addSpace = {
      paddingLeft: chipSizeCls[size].paddingHorizontal + 2,
    };

    const textSizeCls = {
      xs: {
        fontSize: font.fontSize?.overline,
      },
      sm: {
        fontSize: font.fontSize?.caption,
      },
      md: {
        fontSize: font.fontSize?.body2,
      },
      lg: {
        fontSize: font.fontSize?.body1,
      },
      xl: {
        fontSize: font.fontSize?.label,
      },
    };

    /**
     * Determines the color variant based on the color scheme and variant.
     *
     * @returns The color variant based on the color scheme and variant.
     */
    const colorVariant = () => {
      if (colorScheme === "light") {
        if (variant === "solid") {
          return "white";
        } else {
          return defaultColor;
        }
      } else {
        if (variant === "solid") {
          return secondaryColor;
        } else {
          return useDarkColor;
        }
      }
    };

    const getTextColor = {
      color: colorVariant(),
    };

    /**
     * Returns the style object based on the variant prop.
     * @returns The style object for the specified variant.
     */
    const getVariantStyle = () => {
      return {
        solid: { backgroundColor: defaultColor },
        outlined: {
          borderWidth: 1,
          borderColor: defaultColor,
          backgroundColor: "transparent",
        },
        soft: {
          backgroundColor:
            colorScheme === "light" ? useDarkColor : secondaryColor,
        },
      }[variant];
    };

    /**
     * This function is created to handle the rendering of the icon in the button component.
     *
     * This function is memoized using useCallback to avoid unnecessary re-renders. It will only re-compute when any of the dependencies change.
     *
     * @returns A function that returns a React component (JSX.Element) or undefined.
     */
    const _renderIcon = useCallback((): React.JSX.Element | undefined => {
      return !!icon && typeof icon === "function"
        ? createElement(icon, {
            size: textSizeCls[size].fontSize,
            color: colorVariant(),
          })
        : icon;
    }, [icon, size, colorVariant]);

    /**
     * This function is created to map the `size` prop of the button to a corresponding text size.
     * The `size` prop can have one of five values. Each of these values corresponds to a different text size respectively.
     *
     * @returns A function that returns a string that represents the text size.
     */
    const getTextSize = useCallback(():
      | "overline"
      | "caption"
      | "body2"
      | "body1"
      | "label" => {
      switch (size) {
        case "xs":
          return "overline";
        case "sm":
          return "caption";
        case "md":
          return "body2";
        case "lg":
          return "body1";
        case "xl":
          return "label";
        default:
          return "body2";
      }
    }, [size]);

    /**
     * This function is created to handle the rendering of the close button for the Chip component.
     * It checks if the `isClosable` prop is `true`. If it is, it returns a `Pressable` component with the `onPress` prop set to `onPressClose` and the `disabled` prop set to `isDisabled`.
     *
     * @returns A `Pressable` component that renders the close button if `isClosable` is `true`, or `null` otherwise.
     */
    const _renderCloseButton = useCallback((): React.JSX.Element | null => {
      return isClosable ? (
        <Pressable
          onPress={onPressClose}
          disabled={isDisabled}
          accessibilityLabel="close chip button"
          accessible
          accessibilityRole="button"
          accessibilityState={{ disabled: isDisabled }}
        >
          <CloseSmallIcon
            size={textSizeCls[size].fontSize}
            color={colorVariant()}
          />
        </Pressable>
      ) : null;
    }, [isClosable, isDisabled, size, colorVariant, onPressClose]);

    /**
     * This function is created to handle the rendering of the label for the Chip component.
     *
     * @returns A `DNAText` component that renders the label for the Chip component.
     */
    const _renderLabel = useCallback((): React.JSX.Element => {
      return (
        <DNAText style={getTextColor} type={getTextSize()}>
          {label}
        </DNAText>
      );
    }, [getTextColor, label]);

    return (
      <Pressable
        accessible
        accessibilityRole="button"
        accessibilityLabel="chip"
        accessibilityState={{ disabled: isDisabled }}
        style={[
          style,
          styles.chip,
          getVariantStyle(),
          borderRadiusCls[borderRadius],
          chipSizeCls[size],
          isClosable && addSpace,
          isDisabled && styles.buttonDisabled,
        ]}
        disabled={isDisabled}
        ref={ref}
        {...restProps}
      >
        {_renderIcon()}
        {_renderLabel()}
        {_renderCloseButton()}
      </Pressable>
    );
  }
);
