import { colorProps } from "@rndna/base_style";
import { TextInputProps } from "react-native";
import { NumberProp, SvgProps } from "react-native-svg";

export type helperFieldType = "error" | "success" | "info" | "warning";
export type variantType = "flat" | "filled" | "outlined";

export interface IProps extends SvgProps {
  size?: NumberProp;
}

export type assistiveTextType = {
  type: helperFieldType;
  message?: string;
  icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element);
};

export type colorTypes =
  | Exclude<colorProps, "primary" | "secondary" | "danger" | "default">
  | "error";

export type TextFieldtypes = Omit<TextInputProps, "onChange" | "editable"> & {
  /**
   * Sets the default value or state of the component (i.e activated or checked or prefilled).
   */
  value: string;
  /**
   * Property where the user can enable or disable the certain attribute or field.
   */
  disabled?: boolean;
  /**
   * Shows a descriptive text in a field before the field is typed in. Usually this will only be used in special need.
   */
  placeholder?: string;
  /**
   * Change Handler Callback and return text value
   */
  onChangeText?: (val: string) => void;
  /**
   * Change Handler Callback and return native event value
   */
  onChange?: (val: string) => void;
  /**
   * Property that enables user to select icon from the DNA icons library
   */
  icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element);
  /**
   * Property that makes all the inputted values cleared.
   */
  clearable?: boolean;
  /**
   * Display any assistive object or array of messages under the component (e.g. Warning or Error, etc.)
   */
  assistiveText?: assistiveTextType;
  /**
   * Property that shows the field is mandatory to be filled before submitting.
   */
  required?: boolean;
  /**
   * Changes the variation of the element. (flat, outlined, filled)
   */
  variant?: variantType;
  /**
   * Defines the string to prefix the value in textfield.
   */
  prefix?: string;
};
