import { GestureResponderEvent } from "react-native";

export interface ChipProps {
    label: string;
    icon?: string;
    variant?: "solid" | "outlined" | "flat";
    with_avatar?: string;
    size?: "sm" | "default" | "md" | "lg";
    isClosable?: boolean;
    isDisabled?: boolean;
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger" | "default";
    borderRadius?: "squared" | "soft_edged" | "rounded";
    onPressClose?: (event: GestureResponderEvent) => void;
    onPress?: (event: GestureResponderEvent) => void;
  }
  