import { StyleSheet } from 'react-native';
import { useFonts } from "@rndna/theme-provider"

const size = useFonts();

export const styles = StyleSheet.create({
  avatar: {
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  status: {
    borderRadius: 99,
    position: 'absolute',
    borderWidth: 1,
    bottom: 1,
    right: 1,
    zIndex: 999,
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
    fontSize: size.fontSize?.h6,
  },
};

export const avatarSizeCls = {
  xs: {
    height: 24,
    width: 24,
  },
  sm: {
    height: 32,
    width: 32,
  },
  md: {
    height: 40,
    width: 40,
  },
  lg: {
    height: 48,
    width: 48,
  },
  xl: {
    height: 56,
    width: 56,
  },
}