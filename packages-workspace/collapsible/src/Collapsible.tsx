import { View, TouchableOpacity, ViewStyle } from "react-native";
import React, { createElement, useCallback, useEffect, useState } from "react";
import { DNACollapsibleProps } from "./types";
import { styles } from "./styles";
import { useColor } from "@rndna/theme-provider";
import { ChevronUpSmallIcon, ChevronDownSmallIcon } from "@rndna/icon";
import { DNAText } from "@rndna/text";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

/**
 * This component lets users show and hide sections to save vertical space.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNACollapsible } from '@rndna/collapsible';
 *
 * const MyComponent = () => (
 *  <DNACollapsible title="Sample Title">
 *    //your children components
 *  </DNACollapsible>
 * );
 *
 * export default MyComponent;
 * ```
 */

export const DNACollapsible: React.FC<DNACollapsibleProps> = React.forwardRef(
  (
    {
      children,
      title,
      color = "primary",
      height = 250,
      isDisabled,
      ...restProps
    }: DNACollapsibleProps,
    ref: React.Ref<TouchableOpacity>
  ) => {
    const [collapse, setCollapse] = useState(false);
    const animHeight = useSharedValue(0);

    const themeColor = useColor();
    const defaultColor = themeColor[color]["default"];
    const panelBgColor = themeColor[color][50];
    const chevronIcon = !open ? ChevronDownSmallIcon : ChevronUpSmallIcon;

    const panelBorderRadius: ViewStyle = {
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
      borderBottomRightRadius: !open ? 4 : 0,
      borderBottomLeftRadius: !open ? 4 : 0,
    };

    const handleOpen = useCallback(() => {
      animHeight.value = withTiming(height * 0.9, { duration: 200 });
    }, []);

    const handleClose = useCallback(() => {
      animHeight.value = withTiming(0, { duration: 200 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
      return {
        height: animHeight.value,
      };
    });

    /**
     * This function is created to handle the rendering of the icon in the button component.
     *
     * This function is memoized using useCallback to avoid unnecessary re-renders.
     *
     * @returns A function that returns a React component (JSX.Element) or undefined.
     */
    const _renderIcon = useCallback((): React.JSX.Element => {
      return createElement(chevronIcon, {
        size: 24,
        color: defaultColor,
      });
    }, [defaultColor]);

    /**
     * This function '_renderChild' is a memoized callback that returns a JSX element or null.
     * If 'open' is false, it returns null, effectively rendering nothing.
     *
     * It only re-computes when 'open', 'children', or 'height' changes.
     *
     * @returns A JSX element when 'open' is true, and null when 'open' is false.
     */
    const _renderChild = useCallback((): React.JSX.Element | null => {
      return collapse ? (
        <View style={[styles.panelBody, { height: height }]}>{children}</View>
      ) : null;
    }, [open, children, height]);

    /**
     * This function '_renderTitlePanel' is created to render the title panel of the collapsible component.
     * It returns a TouchableOpacity component that toggles the 'open' state on press, effectively opening and closing the collapsible panel.
     *
     * @returns A React component (JSX.Element) that represents the title panel of the collapsible component.
     */
    const _renderTitlePanel = useCallback((): React.JSX.Element => {
      return (
        <TouchableOpacity
          accessible
          accessibilityRole="togglebutton"
          accessibilityLabel="Toggle content"
          accessibilityState={{ disabled: isDisabled, expanded: collapse }}
          accessibilityHint="Press to toggle content"
          ref={ref}
          {...restProps}
          onPress={() => {
            // setCollapse((prev) => !prev);
            handleOpen();
          }}
          style={[
            styles.panelHeader,
            { backgroundColor: panelBgColor },
            panelBorderRadius,
          ]}
        >
          <DNAText style={{ color: defaultColor }}>{title}</DNAText>
          <View>{_renderIcon()}</View>
        </TouchableOpacity>
      );
    }, [
      panelBgColor,
      open,
      _renderIcon,
      title,
      defaultColor,
      panelBorderRadius,
    ]);

    return (
      <View style={[styles.collapsible, { borderColor: defaultColor }]}>
        {_renderTitlePanel()}
        {_renderChild()}
      </View>
    );
  }
);
