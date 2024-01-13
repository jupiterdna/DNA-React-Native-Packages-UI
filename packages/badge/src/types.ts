import { StyleProp, ViewStyle } from 'react-native';
import { colorProps } from '@dnamobile/base_style';

export interface DNABadgeProps {
  value?: string
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
  color?: colorProps;
}
  
  