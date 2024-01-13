import { GestureResponderEvent, TouchableOpacityProps } from "react-native";
import { sizeProps, colorProps, borderRadiusProps, variantProps } from "@dnamobile/base_style";

export interface DNAButtonProps extends TouchableOpacityProps {
    /**
     * Where you can define the label of the component.
     */
    label: string;
     /**
     * Property that enables user to select icon from icon library (Icons were not yet implemented)
     */
    icon?: string;
    /**
     * Property that toggles the positon of icon on left or right
     */
    iconPosition?: "left" | "right";
    /**
     * Property that defines the size of the component or a selection
     */
    size?: sizeProps;
    /**
     * Property that enables or disables the loading property of component
     */
    isLoading?: boolean;
    /**
     * Property that helps in esbalishing loading text.
     */
    loadingLabel?: string;
    /**
     * Property that changes theme/state of the selection i.e. background and text color
     */
    color?: colorProps;
    /**
     * Property that helps in esbalishing loading text.
     */
    variant?: variantProps;
    /**
     * Defines the border dimensions of the component
     */
    borderRadius?: borderRadiusProps;
    /**
     * Defines the border dimensions of the component
     */
    isDisabled?: boolean;
    /**
     * Enables the control to be 100% width inside the parent container.
     */
    fullWidth?: boolean;
    /**
     * Handler when the component is clicked" with "Enables the control to be 100% width inside the parent container
     */
    onPress?: (event: GestureResponderEvent) => void;
}
  