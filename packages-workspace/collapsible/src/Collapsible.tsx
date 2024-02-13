import {View, TouchableOpacity, ScrollView, ViewStyle } from 'react-native'
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

export const DNACollapsible = (props: DNACollapsibleProps) => {

  const { 
    children, 
    title, 
    color = "primary", 
    height = 250,
    isOpen = false,
  } = props

  const [open, setOpen] = useState(false)
  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];
  const panelBgColor = themeColor[color][50];
  const chevronIcon = !open ? ChevronDownSmallIcon : ChevronUpSmallIcon

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const panelBorderRadius: ViewStyle = {
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
      borderBottomRightRadius: !open ? 4 : 0,
      borderBottomLeftRadius: !open ? 4 : 0,
  };

  const _renderIcon = useCallback((): React.JSX.Element => {
    return createElement(chevronIcon, {
      size: 24,
      color: defaultColor
    });
  },[defaultColor])
    
  const _renderChild = useCallback((): React.JSX.Element | null => {
    return open ? <View style={[styles.panelBody,{ height: height }]}>
      {children}
    </View> : null
  },[open, children, height])

  const _renderTitlePanel = useCallback((): React.JSX.Element => {
     return (
        <TouchableOpacity 
            onPress={() => {
              setOpen(prev => !prev)
            }}
            style={[styles.panelHeader, { backgroundColor: panelBgColor }, panelBorderRadius]}
            >
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
}