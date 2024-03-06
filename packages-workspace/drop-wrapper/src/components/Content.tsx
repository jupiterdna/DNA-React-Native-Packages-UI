import { View } from "react-native";
import React from "react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { ContentProps } from "../types";

const Content: ForwardRefRenderFunction<View, ContentProps> = (
  { children, ...rest },
  ref
) => {
  return (
    <View ref={ref} {...rest}>
      {children}
    </View>
  );
};

export default forwardRef(Content);
