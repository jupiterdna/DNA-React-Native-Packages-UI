import { GestureResponderEvent } from "react-native";
import { sizeProps, variantProps, borderRadiusProps, colorProps } from "@dnamobile/base_style";
import React from "react";

export interface DNAChipProps {
    label: string;
    icon?: React.JSX.Element;
    variant?: variantProps;
    with_avatar?: string;
    size?: sizeProps;
    isClosable?: boolean;
    isDisabled?: boolean;
    color?: colorProps;
    borderRadius?: borderRadiusProps;
    onPressClose?: (event: GestureResponderEvent) => void;
    onPress?: (event: GestureResponderEvent) => void;
  }
  