import { colorProps, sizeProps } from "@rndna/base_style";
import type {
  StyleProp,
  TextStyle,
  ViewStyle,
  TextProps,
  FlatListProps,
} from "react-native";

export type IDropdownRef = {
  open: () => void;
  close: () => void;
};

import { SvgProps, NumberProp } from "react-native-svg";

interface IProps extends SvgProps {
  size?: NumberProp;
}

export interface DropdownProps<T> {
  ref?:
    | React.RefObject<IDropdownRef>
    | React.MutableRefObject<IDropdownRef>
    | null
    | undefined;
  testID?: string;
  itemTestIDField?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  selectedTextProps?: TextProps;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  maxHeight?: number;
  dropDownMaxWidth?: number;
  minHeight?: number;
  size?: sizeProps;
  icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element);
  color?: colorProps;
  data: T[];
  value?: T | string | null | undefined;
  placeholder?: string;
  labelField: keyof T;
  valueField: keyof T;
  searchField?: keyof T;
  disable?: boolean;
  autoScroll?: boolean;
  dropdownPosition?: "auto" | "top" | "bottom";
  flatListProps?: Omit<FlatListProps<any>, "renderItem" | "data">;
  keyboardAvoiding?: boolean;
  accessibilityLabel?: string;
  itemAccessibilityLabelField?: string;
  inverted?: boolean;
  mode?: "default" | "modal" | "auto";
  onChange: (item: T) => void;
  renderItem?: (item: T, selected?: boolean) => JSX.Element | null | undefined;
}
