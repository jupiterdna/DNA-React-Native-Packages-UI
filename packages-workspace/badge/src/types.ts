import { StyleProp, ViewProps, ViewStyle } from "react-native";
import { colorProps } from "@rndna/base_style";

export interface DNABadgeProps extends ViewProps{
  /**
   * Where you can define the text of the component
   */
  value?: string;
  /**
   * Property allows you to create a generic template component that can be modified by the parent when it is invoked
   */
  children?: React.ReactNode;
  /**
   * Property that is an optional StyleProp<ViewStyle> object that applies to the outer content View component
   */
  style?: StyleProp<ViewStyle>;
  /**
   *  Property that changes theme/state of the selection i.e. background and text color
   */
  color?: colorProps;
   /**
   *  Property that changes the position of the badge either top or bottom
   */
  position?: "top" | "bottom" | "inline";
}
