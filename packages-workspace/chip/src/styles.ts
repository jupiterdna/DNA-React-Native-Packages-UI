import { StyleSheet } from 'react-native';
import { useFonts } from "@rndna/theme-provider"
import { HistoryIcon } from '@rndna/icon';

const size = useFonts();

export const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 99,
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 4,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export const textSizeCls = {
  xs: {
    fontSize: size.fontSize?.overline,
  },
  sm: {
    fontSize: size.fontSize?.caption,
  },
  md: {
    fontSize: size.fontSize?.body2,
  },
  lg: {
    fontSize: size.fontSize?.body1,
  },
  xl: {
    fontSize: size.fontSize?.label,
  },
};

export const chipSizeCls = {
  xs:{
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
}
export const borderRadiusCls = {
  soft_edged: {
    borderRadius: 4,
  },
  rounded: {
    borderRadius: 999,
  },
}