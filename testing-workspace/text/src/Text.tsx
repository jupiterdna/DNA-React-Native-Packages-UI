import React from "react";
import { Text } from "react-native";
import { DNATextProps } from "./types";
import { useColor } from "@rntest/theme-provider4";

export const DNAText = React.forwardRef<Text, DNATextProps>(
  (
    {
      type = "body2", //returns 16px
      ...restProps
    }: DNATextProps,
    ref
  ) => {
    const themeColor = useColor();
    const defaultColor = themeColor.default[900];
    return (
      <Text
        {...restProps}
        ref={ref}
        style={[{ color: defaultColor }, restProps.style]}
      />
    );
  }
);
