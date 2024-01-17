import { GestureResponderEvent } from "react-native";
import { sizeProps, variantProps, borderRadiusProps, colorProps } from "@rndna/base_style";
import React from "react";
import { SvgProps, NumberProp } from 'react-native-svg';

interface IProps extends SvgProps {
  size?: NumberProp;
}
export interface DNAChipProps {
    /**
     * Where you can define the label of the component.
     */
    label: string;
    /**
     * Property that enables user to select icon from icon library 
     */
    icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element)
    /**
     * Changes the variation of the element. 
     */
    variant?: variantProps;
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
     * Property where the user can enable or disable the certain attribute or field
     */
    color?: colorProps;
    /**
     * Defines the border dimensions of the component
     */
    borderRadius?: borderRadiusProps;
    /**
     * Handler when the component is about to close
     */
    onPressClose?: (event: GestureResponderEvent) => void;
    /**
     * Handler when the component is clicked
     */
    onPress?: (event: GestureResponderEvent) => void;
  }
  