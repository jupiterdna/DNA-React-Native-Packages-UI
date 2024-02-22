import React, { forwardRef } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { DividerProps } from "./types";
import { styles } from "./style";
import { useColor } from "@rndna/theme-provider";
import { DNAText } from "@rndna/text";

const Divider: React.FC<DividerProps> = forwardRef(
  (
    {
      color = "default",
      orientation,
      size = "sm",
      title,
      variant,
      ...rest
    }: DividerProps,
    ref: React.Ref<View>
  ) => {
    const themeColor = useColor();
    const defaultColor = themeColor[color]["200"];

    const coreStyle = (): StyleProp<ViewStyle> => {
      if (orientation === "vertical") {
        return {
          width: size === "sm" ? 1 : size === "md" ? 2 : 3,
        };
      }
      return {
        height: size === "sm" ? 1 : size === "md" ? 2 : 3,
      };
    };

    const getStyle = (): StyleProp<ViewStyle> => {
      const defaultStyle = {
        borderColor: defaultColor,
        borderStyle: variant,
        borderWidth: 1,
      };

      if (orientation === "vertical") {
        return {
          margin: 0,
          marginHorizontal: 10,
          height: "100%",
          ...defaultStyle,
        };
      }
      return {
        margin: -2,
        marginTop: 10,
        ...defaultStyle,
      };
    };

    const _renderTitle = (): React.JSX.Element | null => {
      return title ? (
        <View style={styles.labelWrapper}>
          <DNAText style={styles.label}>{title}</DNAText>
        </View>
      ) : null;
    };

    return (
      <View style={[styles.container, coreStyle()]}>
        <View style={styles.wrapper}>
          <View
            ref={ref}
            {...rest}
            style={[getStyle(), styles.inner, rest.style]}
          >
            <View style={[styles.core, coreStyle()]} />
          </View>
        </View>
        {_renderTitle()}
      </View>
    );
  }
);

export default Divider;
