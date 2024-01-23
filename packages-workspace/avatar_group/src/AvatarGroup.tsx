import React from "react";
import { View } from "react-native";
import { DNAAvatar, DNAAvatarProps } from "@rndna/avatar";
import { DNAAvatarGroupProps } from './types';
import { styles } from './styles';
import { PlusIcon } from "@rndna/icon";
import { borderRadiusCls } from "@rndna/base_style";

const AvatarGroup = (Component: React.FC<DNAAvatarProps>) => 
  ({ 
    options, 
    borderRadius = "rounded", 
    color = "default", 
    size, 
    max = 0, 
    addable = false, 
    alt,
    onPress, 
  }: DNAAvatarGroupProps) => {

  const remainingItem = options.length - max;
  const avatarWrapperStyle = [styles.avatarWrapper, borderRadiusCls[borderRadius]];

  return (
    <View style={styles.avatarContainer}>
      {(max > 0 ? options.slice(0, max) : options).map((option, index) => {

        const lastItem = options.length -1 === index;
        
        return (
          <View style={avatarWrapperStyle} key={option.id}>
            <Component 
              size={size}
              color={color} 
              borderRadius={borderRadius} 
              name={option.name} 
              imageSource={!lastItem ? option.src : ''}
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
      