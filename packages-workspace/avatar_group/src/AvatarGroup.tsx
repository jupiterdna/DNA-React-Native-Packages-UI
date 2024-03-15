import React, { useCallback } from "react";
import { View } from "react-native";
import { DNAAvatar, DNAAvatarProps } from "@rndna/avatar";
import { DNAAvatarGroupProps } from "./types";
import { styles } from "./styles";
import { PlusIcon } from "@rndna/icon";
import { borderRadiusCls } from "@rndna/base_style";

/**
 * An avatar group displays a number of avatars grouped together in a stack
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAAvatarGroup } from '@rndna/avatar_group';
 *
 * const MyComponent = () => (
 *  <DNAAvatarGroup
 *   options={group_data}
 *   color="warning"
 *   size="md"
 *   onPress={(evt: GestureResponderEvent | undefined) => {
 *      console.log('pressed')
 *    }}
 *  />
 * );
 *
 * export default MyComponent;
 * ```
 */

const AvatarGroup =
  (DNAAvatar: React.FC<DNAAvatarProps>) => (props: DNAAvatarGroupProps) => {
    const {
      options,
      borderRadius = "rounded",
      color = "default",
      size,
      max = 0,
      addable = false,
      alt,
      onPress,
    } = props;

    const remainingItem = options.length - max;
    const avatarWrapperStyle = [
      styles.avatarWrapper,
      borderRadiusCls[borderRadius],
    ];

    /**
     * Renders the AvatarGroup component.
     *
     * @returns An array of React JSX elements representing the AvatarGroup.
     */
    const _renderAvatarGroup = useCallback((): React.JSX.Element[] => {
      return (max > 0 ? options.slice(0, max) : options).map((option) => (
        <View style={avatarWrapperStyle} key={option.id}>
          <DNAAvatar
            size={size}
            color={color}
            borderRadius={borderRadius}
            name={option.name}
            imageSource={option.src}
            alt={alt}
          />
        </View>
      ));
    }, [max, size, color, borderRadius, options]);

    /**
     * Renders the remaining avatar element.
     * @returns The JSX element representing the remaining avatar, or null if there are no remaining items.
     */
    const _renderRemainingAvatar = useCallback((): React.JSX.Element | null => {
      return max > 0 && remainingItem > 0 ? (
        <View style={avatarWrapperStyle}>
          <DNAAvatar
            size={size}
            color={color}
            borderRadius={borderRadius}
            name={`+ ${remainingItem}`}
          />
        </View>
      ) : null;
    }, [max, remainingItem, size, color, avatarWrapperStyle, borderRadius]);

    /**
     * Renders the add sign if the `addable` prop is true.
     *
     * @returns A React JSX element representing the add sign.
     */
    const _renderAddSign = useCallback((): React.JSX.Element | null => {
      return addable ? (
        <View style={avatarWrapperStyle}>
          <DNAAvatar
            size={size}
            color={color}
            borderRadius={borderRadius}
            icon={PlusIcon}
            onPress={onPress}
          />
        </View>
      ) : null;
    }, [addable, avatarWrapperStyle, size, color, borderRadius, onPress]);

    return (
      <View
        style={styles.avatarContainer}
        accessible
        accessibilityLabel="avatar group"
      >
        {_renderAvatarGroup()}
        {_renderRemainingAvatar()}
        {_renderAddSign()}
      </View>
    );
  };

const DNAAvatarGroup = AvatarGroup(DNAAvatar);

export default DNAAvatarGroup;
