import React from "react";
import {
  Text,
} from "react-native";
import { textSizeCls } from './styles';
import { DNATextProps } from './types';
import { useColor, useFonts } from '@rndna/theme-provider';
import { Font } from "@rndna/fonts";

/**
 * A component to display heading 1 or h1 type of text. 
 * The default type value is body2, which returns 16px.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DNAText } from '@rndna/text';
 *
 * const ComponentName = () => (
 *  <DNAText type="h1" />
 * );
 *
 * export default ComponentName;
 * ```
 */

export const DNAText:React.FC<DNATextProps> = React.forwardRef(
  (
    {
      type = "body2", //returns 16px
      ...restProps
    }: DNATextProps,
    ref: React.Ref<Text>,
  ) => {

  const themeColor = useColor();
  const defaultColor = themeColor.default[900]  
  const defaultFont = useFonts();

  console.log('textSizeCls', textSizeCls)

  return (
   <Text {...restProps} ref={ref} style={[Font(defaultFont.fontFamily, 'normal'), textSizeCls[type], { color: defaultColor }, restProps.style]} />
  );
});


