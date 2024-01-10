import { StyleProp, ViewStyle } from 'react-native';
import { colorProps } from '@dnamobile/base_style';

export interface BadgeProps {
  value?: string
  children?: any
  style?: StyleProp<ViewStyle>
  color?: colorProps;
}
  
  