import { TextProps } from "react-native";

export interface DNATextProps extends TextProps {
   /**
   * Property that defines the font size of the text
   */
   type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label"  | "body1" | "body2" | "caption" | "overline" | undefined;
}
  