import { GestureResponderEvent, PressableProps, StyleProp, ViewStyle } from "react-native";
import {
  sizeProps,
  variantProps,
  borderRadiusProps,
  colorProps,
} from "@rndna/base_style";
import React from "react";
import { SvgProps, NumberProp } from "react-native-svg";

interface IProps extends SvgProps {
  size?: NumberProp;
}
export interface DNAChipProps extends PressableProps{
  /**
   * Where you can define the label of the component.
   */
  label: string;
  /**
   * Property that enables user to select icon from icon library
   */
  icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element);
  /**
   * Changes the variation of the element.
   */
  variant?: Exclude<variantProps, "flat">;
  /**
   * Property that defines the size of the component or a selection
   */
  size?: sizeProps;
  /**
   * Property that places a Closable button as X icon on the component to make it closable
   */
  isClosable?: boolean;
  /**
   * Property where the user can enable or disable the certain attribute or field
   */
  isDisabled?: boolean;
  /**
   *  Property that changes theme/state of the selection i.e. background and text color
   */
  color?: colorProps;
  /**
   * Defines the border dimensions of the component
   */
  borderRadius?: Exclude<borderRadiusProps, "squared">;
  /**
   * Handler when the component is about to close
   */
  onPressClose?: (event: GestureResponderEvent) => void;
  /**
   * Style that is an optional StyleProp<ViewStyle> object that applies to the outer content View component
   */
  style?: StyleProp<ViewStyle>;
}
