import {View, TouchableOpacity, ViewStyle} from 'react-native'
import React, {createElement, useCallback, useEffect, useState} from 'react'
import {DNACollapsibleProps} from './types';
import {styles} from './styles'
import { useColor } from "@rndna/theme-provider"
import {ChevronUpSmallIcon, ChevronDownSmallIcon} from "@rndna/icon"
import {DNAText} from '@rndna/text'

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

export const DNACollapsible: React.FC<DNACollapsibleProps> = React.forwardRef((
  {
    children, 
    title, 
    color = "primary", 
    height = 250,
    isOpen = false,
    ...restProps
  }: DNACollapsibleProps,
  ref: React.Ref<TouchableOpacity>,
) => {
  const [open, setOpen] = useState(false)
  
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];
  const panelBgColor = themeColor[color][50];
  const chevronIcon = !open ? ChevronDownSmallIcon : ChevronUpSmallIcon

  const panelBorderRadius: ViewStyle = {
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
      borderBottomRightRadius: !open ? 4 : 0,
      borderBottomLeftRadius: !open ? 4 : 0,
  };

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
      color: defaultColor
    });
  },[defaultColor])
  
   /**
   * This function '_renderChild' is a memoized callback that returns a JSX element or null.
   * If 'open' is false, it returns null, effectively rendering nothing.
   * 
   * It only re-computes when 'open', 'children', or 'height' changes.
   * 
   * @returns A JSX element when 'open' is true, and null when 'open' is false.
   */
  const _renderChild = useCallback((): React.JSX.Element | null => {
    return open ? <View style={[styles.panelBody,{ height: height }]}>
      {children}
    </View> : null
  },[open, children, height])

  /**
   * This function '_renderTitlePanel' is created to render the title panel of the collapsible component.
   * It returns a TouchableOpacity component that toggles the 'open' state on press, effectively opening and closing the collapsible panel.
   * 
   * @returns A React component (JSX.Element) that represents the title panel of the collapsible component.
   */
  const _renderTitlePanel = useCallback((): React.JSX.Element => {
     return (
        <TouchableOpacity
            ref={ref}
            {...restProps} 
            onPress={() => {
              setOpen(prev => !prev)
            }}
            style={[
              styles.panelHeader, 
              { backgroundColor: panelBgColor }, 
              panelBorderRadius]
            }>
            <DNAText style={{ color: defaultColor }}>{title}</DNAText>
            <View>
              {_renderIcon()}
            </View>
        </TouchableOpacity>
      )
  },[panelBgColor, open, _renderIcon, title, defaultColor, panelBorderRadius])
  
  return (
    <View style={[styles.collapsible, { borderColor: defaultColor }]}>
      {_renderTitlePanel()}
      {_renderChild()}
    </View>
  )
});