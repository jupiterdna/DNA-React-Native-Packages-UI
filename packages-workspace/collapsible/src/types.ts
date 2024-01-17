import { StyleProp, ViewStyle } from 'react-native';
import { colorProps } from "@rndna/base_style";

export interface DNACollapsibleProps {
  title: string
  children?: React.ReactNode
  color?: colorProps;
}
  
  