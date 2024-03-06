import { View, ViewProps } from "react-native";
import React from "react";
import { PopOverProps } from "../types";

const PopOver: React.FC<PopOverProps & ViewProps> = ({ children, ...rest }) => {
  return <View {...rest}>{children}</View>;
};

export default PopOver;
