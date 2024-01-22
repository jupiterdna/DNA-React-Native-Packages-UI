import React, { createElement } from "react";
import { Pressable, useColorScheme, Image, View } from "react-native";
import { avatarSizeCls, styles, textSizeCls} from "./styles"; 
import { DNAText } from "@rndna/text";
import { borderRadiusCls } from "@rndna/base_style";
import { useColor } from "@rndna/theme-provider";
import { DNAAvatarProps } from "./types";
import { UserIcon } from "@rndna/icon"

export const DNAAvatar: React.FC<DNAAvatarProps> = React.forwardRef(
  (
    {
      size = "md",
      borderRadius = "rounded",
      imageSource,
      color = "default",
      name,
      icon = UserIcon,
      // withStatus = false,
      // withBadge = false,
      // statusColor = "primary",
      ...restProps
    }: DNAAvatarProps,
    ref: React.Ref<any>,
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

  // const getStatusIndicator = () => {
  //   if (withStatusIndicator) {
  //     return (
  //       <View
  //         style={[
  //           styles.avatarStatusIndicator,
  //           { backgroundColor: defaultColor },
  //         ]}
  //       />
  //     );
  //   }
  //   return null;
  // };

  // const getNotificationIndicator = () => {
  //   if (withNotifications) {
  //     return (
  //       <View style={styles.avatarNotificationIndicator}>
  //         <DNAText style={styles.notificationCountText}>3</DNAText>
  //       </View>
  //     );
  //   }
  //   return null;
  // };

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
        return 'h6'
      default: 
        return 'body2'
    }
  }

  const renderIcon = 
  typeof icon === "function"
    ? createElement(icon, {
        size: (textSizeCls[size].fontSize || -1) + 6,
        color: colorVariant
      })
    : icon

  const filteredName =
      name &&
        name
          .split(/\s+/)
          .slice(0, 2)
          .map(word => word.charAt(0).toUpperCase())
          .join("")
      
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
      {!!name && <View style={[styles.overlay, avatarSizeCls[size], borderRadiusCls[borderRadius]]} /> }
      {!!imageSource ? (
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{ uri: imageSource }}
          resizeMethod="auto"

        />
      ) : !!name ?  (
        <DNAText style={getTextColor} type={getTextSize()}>{filteredName}</DNAText>
      ) : (
        renderIcon
      )}
    </Pressable>
  );
});