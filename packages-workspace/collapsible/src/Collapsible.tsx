import {View, TouchableOpacity, Text, useColorScheme } from 'react-native'
import React, {createElement, useState} from 'react'
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

  const { children, title, color = "primary"} = props
  const [open, setOpen] = useState(true)

  const themeColor = useColor();
  const defaultColor = themeColor[color]["default"];
  const panelBgColor = themeColor[color][50];
  const chevronIcon = !open ? ChevronDownSmallIcon : ChevronUpSmallIcon

  const renderIcon =
      createElement(chevronIcon, {
        size: 24,
        color: defaultColor
      })
  
  const panelBorderRadius = {
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
      borderBottomRightRadius: !open ? 4 : 0,
      borderBottomLeftRadius: !open ? 4 : 0,
  };
    
  return (
    <View style={[styles.collapsible, { borderColor: defaultColor  }]}>
      <TouchableOpacity 
        onPress={() => {
          setOpen(prev => !prev)
        }}
        style={[styles.panelHeader, { backgroundColor: panelBgColor }, panelBorderRadius]}
        >
        <DNAText style={{ color: defaultColor }}>{title}</DNAText>
        <View>
        {renderIcon}
        </View>
      </TouchableOpacity>
      {open ? <View style={styles.panelBody}>
       {children}
      </View> : null}
    </View>
  )
}