import {View, TouchableOpacity, Text } from 'react-native'
import React, {useState} from 'react'
import {DNACollapsibleProps} from './types'
import {styles} from './styles'
import {defaultColors} from "@rndna/base_style";
import { DNAButton } from '@rndna/button';

//Lacking angle icons and standard styling

export const DNACollapsible = (props: DNACollapsibleProps) => {

  const { children, title, style } = props
  const [open, setOpen] = useState(true)
  
  const borderColor = () => {
    return { borderColor: !open ? defaultColors.default : defaultColors.primary }
  }
  const textColor = () => {
    return { color: !open ? defaultColors.default : defaultColors.primary }
  }

  return (
    <View style={style}>
      <TouchableOpacity 
        onPress={() => {
          setOpen(prev => !prev)
        }}
        style={[styles.collapsible, borderColor()]}
        >
        <Text style={textColor()}>{title}</Text>
        <Text style={textColor()}>{!open ? '\u25BC' : '\u25B2'}</Text>
      </TouchableOpacity>
      {open ? <View style={styles.childrenStyle}>
       {children}
      </View> : null}
    </View>
  )
}