import { GestureResponderEvent } from "react-native";

export interface DNAButtonProps {
    label: string;
    icon?: string;
    iconPosition?: "left" | "right";
    size?: "sm" | "default" | "md" | "lg";
    isLoading?: boolean;
    loadingLabel?: string;
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger" | "default";
    variant?: "solid" | "outlined" | "flat";
    borderRadius?: "squared" | "soft_edged" | "rounded";
    isDisabled?: boolean;
    fullWidth?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}
  