import React, { createElement, useCallback } from "react";
import { Pressable, useColorScheme, Image, View, Text } from "react-native";
import { avatarSizeCls, styles } from "./styles";
import { DNAText } from "@rntest/text6";
import { borderRadiusCls } from "@rndna/base_style";
import { useColor, useFonts } from "@rntest/theme-provider4";
import { DNAAvatarProps } from "./types";
import { UserIcon } from "@rntest/icon";

/**
 * The Avatar componente can display profile pictures, initials, or a fallback image to represent a user.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAAvatar } from '@rndna/avatar';
 *
 * const MyComponent = () => (
 *  <DNAAvatar
 *   name="John Smith"
 *   size="md"
 *   src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg"
 *   onPress={(evt: GestureResponderEvent | undefined) => {
 *      console.log('pressed')
 *    }}
 *  />
 * );
 *
 * export default MyComponent;
 * ```
 */

export const DNAAvatar: React.FC<DNAAvatarProps> = React.forwardRef(
  (
    {
      size = "md",
      borderRadius = "rounded",
      imageSource,
      color = "default",
      name,
      alt,
      icon = UserIcon,
      ...restProps
    }: DNAAvatarProps,
    ref: React.Ref<View>
  ) => {
    const themeColor = useColor();
    const fsize = useFonts();
    const defaultColor = themeColor[color]["default"];
    const secondaryColor = themeColor[color][100];

    const colorVariant =
      useColorScheme() === "light" ? "white" : secondaryColor;

    const getTextColor = {
      color: colorVariant,
    };

    const getBgColor = {
      backgroundColor: defaultColor,
    };

    const textSizeCls = {
      xs: {
        fontSize: fsize.fontSize?.overline,
      },
      sm: {
        fontSize: fsize.fontSize?.caption,
      },
      md: {
        fontSize: fsize.fontSize?.body2,
      },
      lg: {
        fontSize: fsize.fontSize?.body1,
      },
      xl: {
        fontSize: fsize.fontSize?.h6,
      },
    };

    const getTextSize = useCallback(():
      | "overline"
      | "caption"
      | "body2"
      | "body1"
      | "h6" => {
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
          return "h6";
        default:
          return "body2";
      }
    }, [size]);

    /**
     * Returns the icon element based on the provided icon.
     *
     * @returns  The icon element as a JSX.Element.
     */
    const _renderIcon = useCallback((): React.JSX.Element => {
      return typeof icon === "function"
        ? createElement(icon, {
            size:
              size !== "xs"
                ? (textSizeCls[size].fontSize || -1) + 4
                : textSizeCls[size].fontSize,
            color: colorVariant,
          })
        : icon;
    }, [icon, size, colorVariant]);

    /**
     * Returns the filtered name based on the provided name.
     * The filtered name consists of the first letter of each word in the name, capitalized.
     * If the name is empty or null, it returns null.
     *
     * @returns The filtered name or null.
     */
    const filteredName = useCallback((): string | null => {
      return name
        ? name
            .split(/\s+/)
            .slice(0, 2)
            .map((word) => word.charAt(0).toUpperCase())
            .join("")
        : null;
    }, [name]);

    /**
     * Renders the overlay element based on the provided name.
     *
     * @returns The overlay element as a JSX.Element or null if the name is empty.
     */
    const _renderOverlay = useCallback((): React.JSX.Element | null => {
      return !!name ? (
        <View
          style={[
            styles.overlay,
            avatarSizeCls[size],
            borderRadiusCls[borderRadius],
          ]}
        />
      ) : null;
    }, [size, borderRadius]);

    /**
     * Renders the avatar based on the provided image source, name, or icon.
     *
     * @returns The rendered avatar element.
     */
    const _renderAvatar = useCallback((): React.JSX.Element | null => {
      if (imageSource) {
        return (
          <Image
            style={[
              { width: "100%", height: "100%" },
              borderRadiusCls[borderRadius],
            ]}
            source={{ uri: imageSource }}
            resizeMethod="auto"
            alt={alt}
          />
        );
      }
      if (name) {
        return (
          <DNAText style={getTextColor} type={getTextSize()}>
            {filteredName()}
          </DNAText>
        );
      }
      if (icon) {
        return _renderIcon();
      }
      return null;
    }, [
      imageSource,
      borderRadius,
      alt,
      name,
      filteredName,
      getTextColor,
      _renderIcon,
      getTextSize,
    ]);

    return (
      <Pressable
        style={[
          styles.avatar,
          avatarSizeCls[size],
          borderRadiusCls[borderRadius],
          getBgColor,
        ]}
        ref={ref}
        {...restProps}
      >
        {_renderOverlay()}
        {_renderAvatar()}
      </Pressable>
    );
  }
);
