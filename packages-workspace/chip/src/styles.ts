import { StyleSheet } from 'react-native';
import { useFonts } from "@rndna/theme-provider"

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
  sm: {
    fontSize: size.fontSize?.overline,
  },
  default: {
    fontSize: size.fontSize?.caption,
  },
  md: {
    fontSize: size.fontSize?.body2,
  },
  lg: {
    fontSize: size.fontSize?.body1,
  },
};

export const chipSizeCls = {
  sm: {
    height: 22,
    paddingHorizontal: 6,
  },
  default: {
    height: 26,
    paddingHorizontal: 8,
  },
  md: {
    height: 30,
    paddingHorizontal: 10,
  },
  lg: {
    height: 34,
    paddingHorizontal: 12,
  },
}