import { sizeProps, colorProps } from "@rndna/base_style";
import { SwitchProps } from "react-native";
import { NumberProp, SvgProps } from "react-native-svg";

interface IProps extends SvgProps {
  /**
   * Where you can define the size of your icon
   */
  size?: NumberProp;
}

export interface DNASwitchProps extends SwitchProps{
  /**
   * Property that defines the title of the component.
   */
  title?: string;
  /**
   * Property that defines the position of title.
   */
  titlePosition?: 'top' | 'bottom' | 'left' | 'right';
   /**
   * Property that defines the right label of the component.
   */
  labelRight?: string;
  /**
   * Property that defines the left label of the component.
   */
  labelLeft?: string;
  /**
   * Property that defines the size of the component or a selection
   */
  size?: sizeProps;
  /**
   * Property that changes theme/state of the selection i.e. background and text color
   */
  color?: colorProps;
  /**
   * Property that defines the checked state of the component.
   */
  checked?: boolean;
  /**
   * Property where the user can enable or disable the certain attribute or field
   */
  disabled?: boolean;
  /**
   * Property that defines the value of the component.
   */
  value?: boolean;
  /**
   * Property that defines the function when the value of the component is changed.
   */
  onValueChange?: (value: boolean) => void;
  /**
   * Property that defines the left icon of the component.
   */
  iconLeft?:  React.JSX.Element | ((e?: IProps | any) => React.JSX.Element)
  /**
   * Property that defines the right icon of the component.
   */
  iconRight?:  React.JSX.Element | ((e?: IProps | any) => React.JSX.Element)
  /**
   * Property that defines the variant of the component.
   */
  variant?: 'solid' | 'filled';
}
