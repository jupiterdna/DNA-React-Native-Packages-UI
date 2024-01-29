import { sizeProps } from "@rndna/base_style";
import { GestureResponderEvent, PressableProps } from "react-native";

export interface DNARadioButtonProps extends PressableProps {
  id?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean,
  size?: sizeProps,
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
