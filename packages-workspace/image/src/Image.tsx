import React, { useCallback, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { borderRadiusCls } from "@rndna/base_style";
import { DNAImageProps } from "./types";
import { imageSizeCls, styles, imageRatioCls } from "./styles";
import { useColor } from "@rndna/theme-provider";
import FastImage from "react-native-fast-image";

/**
 * Image component to display different types of images, including network images, static resources,
 * temporary local images, and images from local disk, such as the camera roll
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAImage } from '@rndna/image';
 *
 * const MyComponent = () => (
 *  <DNAImage
 *   size="md"
 *   src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg"
 *   fit="contain"
 *   ratio="1:1"
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
    ref: React.Ref<View>,
  ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [imgUri, setUri] = useState("");

    const resizeFit = fit === "contain" ? FastImage.resizeMode.contain : FastImage.resizeMode.cover;

    const themeColor = useColor();
    const loadingColor = themeColor["primary"][500];


    const onLoadEnd = () => {
        setIsLoading(false);
    };

    const _renderLoading = useCallback((): React.JSX.Element | null => {
      return (
        isLoading ? 
          <View style={[imageSizeCls[size], styles.imageWrapper, styles.loadingIndicator]}>
              <ActivityIndicator size="small" color={loadingColor} style={styles.image}/>
          </View>
        : null
      )
    }, [isLoading, size, loadingColor])

    const _renderImage = useCallback((): React.JSX.Element => {
       return ( 
          <FastImage
            style={[styles.image, borderRadiusCls[borderRadius]]}
            source={{
              uri: src,
              priority: FastImage.priority.high,
              cache: FastImage.cacheControl.immutable
            }}
            resizeMode={resizeFit}
            onLoadEnd={onLoadEnd}
            {...restProps}
          />
        )
      }, [borderRadius, src, resizeFit, onLoadEnd])

    return (
      <View
        style={[
          styles.imageWrapper,
          imageRatioCls[ratio],
          imageSizeCls[size],
          borderRadiusCls[borderRadius],
        ]}
      >
        {_renderLoading()}
        {_renderImage()}
      </View>
    );
  }
);
