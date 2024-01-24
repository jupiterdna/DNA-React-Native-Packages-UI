import React from "react";
import { View } from "react-native";
import { borderRadiusCls } from "@rndna/base_style";
import { DNAImageProps } from "./types";
import { imageSizeCls, styles, imageRatioCls } from "./styles"; 
import FastImage from 'react-native-fast-image'

/**
 * The Avatar component can display profile pictures, initials, or a fallback image to represent a user.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAImage } from '@rndna/image';
 *
 * const MyComponent = () => (
 *  <DNAImage 
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

export const DNAImage: React.FC<DNAImageProps> = React.forwardRef(
  (
    {
      borderRadius = "soft_edged",
      size = "md",
      ratio = "16:9",
      src,
      fit = "cover",
      ...restProps
    }: DNAImageProps,
    ref: React.Ref<any>,
  ) => {

  const resizeFit = fit === 'contain' ? FastImage.resizeMode.contain : FastImage.resizeMode.cover; 

  return (
    <View
      style={[
        styles.imageWrapper,
        imageRatioCls[ratio],
        imageSizeCls[size],
        borderRadiusCls[borderRadius],
      ]}>
      <FastImage
        style={[styles.image, borderRadiusCls[borderRadius]]}
        source={{ 
          uri: src,
          cache: FastImage.cacheControl.immutable,
          priority: FastImage.priority.high,
        }}
        resizeMode={resizeFit}
      />
    </View>
  );
});