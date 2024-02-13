import React, { createElement, useCallback } from "react";
import { Pressable, useColorScheme, Image, View } from "react-native";
import { avatarSizeCls, styles, textSizeCls} from "./styles"; 
import { DNAText } from "@rndna/text";
import { borderRadiusCls } from "@rndna/base_style";
import { useColor } from "@rndna/theme-provider";
import { DNAAvatarProps } from "./types";
import { UserIcon } from "@rndna/icon"

/**
 * The Avatar component can display profile pictures, initials, or a fallback image to represent a user.
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
    ref: React.Ref<View>,
  ) => {

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];
  const secondaryColor = themeColor[color][100];

  const colorVariant =  useColorScheme() === 'light' ? 'white' : secondaryColor

  const getTextColor = {
    color: colorVariant
  };
  
  const getBgColor = {
   backgroundColor: defaultColor,
  }

  const getTextSize = useCallback((): "overline" | "caption" | "body2" | "body1" | "h6" => {
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
        return 'h6'
      default: 
        return 'body2'
    }
  },[size]);

  const _renderIcon = useCallback((): React.JSX.Element  => {
    return typeof icon === "function"
      ? createElement(icon, {
        size: size !== 'xs' ? (textSizeCls[size].fontSize || -1) + 4 : textSizeCls[size].fontSize,
        color: colorVariant
      })
      : icon;
  }, [icon, size, colorVariant])
   
  const filteredName = useCallback((): string | undefined => {
    return (
      name &&
        name
          .split(/\s+/)
          .slice(0, 2)
          .map(word => word.charAt(0).toUpperCase())
          .join("")
    )
  },[name]);
    
  const _renderOverlay = useCallback((): false | React.JSX.Element => {
    return !!name && <View style={[styles.overlay, avatarSizeCls[size], borderRadiusCls[borderRadius]]} /> 
  }, [size, borderRadius])

  const _renderAvatar = useCallback((): React.JSX.Element => {
    return (
      !!imageSource ? (
          <Image
            style={[{ width: '100%', height: '100%'}, borderRadiusCls[borderRadius]]}
            source={{ uri: imageSource }}
            resizeMethod="auto"
            alt={alt}
          />
      ) : !!name ?  (
        <DNAText style={getTextColor} type={getTextSize()}>{filteredName()}</DNAText>
      ) : (
        _renderIcon()
      )
    )
  }, [imageSource, borderRadius, alt, name, filteredName, getTextColor])

  return (
    <Pressable
      style={[
        styles.avatar,
        avatarSizeCls[size],
        borderRadiusCls[borderRadius],
        getBgColor
      ]}
      ref={ref}
      {...restProps}
    >
      {_renderOverlay()}
      {_renderAvatar()}
    </Pressable>
  );
});