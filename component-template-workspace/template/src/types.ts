import { GestureResponderEvent } from "react-native";


export interface ComponentTypes   {
  /**
   * Write and describe what the property all about
   */
  value: string;
  /**
   * Write and describe what the property all about
   */
  label?: string;
  /**
   * Write and describe what the property all about
   */
  onEvent?: (e?: GestureResponderEvent) => void
}
