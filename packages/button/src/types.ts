import { GestureResponderEvent } from "react-native";
import { sizeProps, colorProps, borderRadiusProps, variantProps } from "@dnamobile/base_style";

export interface DNAButtonProps {
    label: string;
    icon?: string;
    iconPosition?: "left" | "right";
    size?: sizeProps;
    isLoading?: boolean;
    loadingLabel?: string;
    color?: colorProps;
    variant?: variantProps;
    borderRadius?: borderRadiusProps;
    isDisabled?: boolean;
    fullWidth?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}
  