import { GestureResponderEvent, PressableProps } from "react-native";
import {
  sizeProps,
  colorProps,
  borderRadiusProps,
  variantProps,
} from "@rndna/base_style";
import { SvgProps, NumberProp } from "react-native-svg";

interface IProps extends SvgProps {
  size?: NumberProp;
}

export interface DNAButtonProps extends PressableProps {
  /**
   * Where you can define the label of the component.
   */
  label?: string;
  /**
   * Property that enables user to select icon from icon library (Icons were not yet implemented)
   */
  icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element);
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
   * Property that helps in esbalishing loading text.r
   */
  loadingLabel?: string;
  /**
   * Property that changes theme/state of the selection i.e. background and text color
   */
  color?: colorProps;
  /**
   * Changes the variation of the element. "solid" | "outlined" | "flat" | "soft";
   */
  variant?: variantProps;
  /**
   * Defines the border dimensions of the component
   */
  borderRadius?: borderRadiusProps;
  /**
   * Property where the user can enable or disable the certain attribute or field
   */
  isDisabled?: boolean;
  /**
   * Enables the control to be 100% width inside the parent container.
   */
  fullWidth?: boolean;
  /**
   * Handler when the component is clicked" with "Enables the control to be 100% width inside the parent container
   */
  onPress?: () => void;
  /**
   * Property that defines the color of the ripple effect.
   */
  rippleColor?: string;
  /**
   * Property that defines opacity of the ripple effect.
   */
  rippleOpacity?: number;
  /**
   * Property that defines the duration of ripple effect animation.
   */
  rippleDuration?: number;
  /**
   * Property that defines the size of the ripple effect.
   */
  rippleSize?: number;
  /**
   * Property that defines whether the ripple effect should be centered on the press point.
   */
  rippleCentered?: boolean;
  /**
   * Property that defines whether to show ripples sequentially.
   */
  rippleSequential?: boolean;
  /**
   * Property that defines whether the ripple effect should fade out.
   */
  rippleFades?: boolean;
  /**
   * Property that defines whether the ripple effect should be enabled.
   */
  enableRipple?: boolean;
}
