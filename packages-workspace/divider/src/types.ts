import { colorProps } from "@rndna/base_style";
import { StyleProp, ViewProps, ViewStyle } from "react-native";

export type DividerProps = ViewProps & {
  /**
   * The title of the divider.
   */
  title?: string;

  /**
   * The orientation of the divider.
   * Can be "vertical" or "horizontal".
   */
  orientation?: "vertical" | "horizontal";

  /**
   * The size of the divider.
   * Can be "sm", "md", or "lg".
   */
  size?: "sm" | "md" | "lg";

  /**
   * The variant of the divider.
   * Can be "solid", "dashed", or "dotted".
   */
  variant?: "solid" | "dashed";

  /**
   * The color of the divider.
   */
  color?: colorProps;
};
