import { GestureResponderEvent } from "react-native";


export interface DNATextfieldProps   {
  /**
   * Sets the default value or state of the component (i.e activated or checked or prefilled).
   */
  value: string;
  /**
   * Where you can define the label of the component.
   */
  label?: string;
  /**
   * Changes the variation of the element.
   */
  variant?: 'flat' | 'filled' | 'outlined' 
  /**
   * render icon of the input element
   */
  icon?: React.JSX.Element 
}
