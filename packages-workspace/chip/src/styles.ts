import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 99,
    paddingHorizontal: 8,
    height: 26,
    gap: 4,
    alignSelf: "flex-start",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export const chipSizeCls = {
  xs: {
    height: 20,
    paddingHorizontal: 6,
  },
  sm: {
    height: 24,
    paddingHorizontal: 6,
  },
  md: {
    height: 26,
    paddingHorizontal: 8,
  },
  lg: {
    height: 28,
    paddingHorizontal: 10,
  },
  xl: {
    height: 30,
    paddingHorizontal: 12,
  },
};
export const borderRadiusCls = {
  soft_edged: {
    borderRadius: 4,
  },
  rounded: {
    borderRadius: 999,
  },
};
