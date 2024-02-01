import { sizeProps } from "@rndna/base_style";
import { GestureResponderEvent, PressableProps } from "react-native";

export interface DNACheckboxProps extends PressableProps {
  /**
   * Property that is used to pass in the id parameter of code.
  */
  id?: string;
  /**
  * Property that defines the value of the selected option.
  */
  value?: string;
  /**
  * Property that defines the label of the option.
  */
  label?: string;
  /**
   * Property where the user can enable or disable the certain option
   */
  disabled?: boolean;
  /**
   * Property where the user can checked or unchecked the certain option
   */
  checked?: boolean,
  /**
   * Property that defines the size of the component or a selection
   */
  size?: sizeProps,
  /**
   * Handler when the component is pressed
  */
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
