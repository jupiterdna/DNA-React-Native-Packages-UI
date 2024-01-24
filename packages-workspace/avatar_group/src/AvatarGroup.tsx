import React from "react";
import { View } from "react-native";
import { DNAAvatar, DNAAvatarProps } from "@rndna/avatar";
import { DNAAvatarGroupProps } from './types';
import { styles } from './styles';
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

const AvatarGroup = (Component: React.FC<DNAAvatarProps>) => 
  (props: DNAAvatarGroupProps) => {
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
  const avatarWrapperStyle = [styles.avatarWrapper, borderRadiusCls[borderRadius]];

  return (
    <View style={styles.avatarContainer}>
      {(max > 0 ? options.slice(0, max) : options).map((option) => {
        
        return (
          <View style={avatarWrapperStyle} key={option.id}>
            <Component 
              size={size}
              color={color} 
              borderRadius={borderRadius} 
              name={option.name} 
              imageSource={option.src}
              alt={alt}
            />
          </View>
        )
      })}

      {(max > 0 && remainingItem > 0) && (
        <View style={avatarWrapperStyle}>
          <Component 
            size={size}
            color={color} 
            name={`+ ${remainingItem}`}
          />
        </View>
      )}

      {addable && (
        <View style={avatarWrapperStyle}>
          <Component 
            size={size}
            color={color} 
            borderRadius={borderRadius} 
            icon={PlusIcon}
            onPress={onPress}
          />
        </View>
      )}
    </View>
  );
};

const DNAAvatarGroup = AvatarGroup(DNAAvatar);

export default DNAAvatarGroup;
      