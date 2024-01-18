import { StyleSheet } from 'react-native';
import { useFonts } from "@rndna/theme-provider"

const size = useFonts();

export const styles = StyleSheet.create({
    button: {
      height: 40,
      paddingHorizontal: 12,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      minWidth: "auto",
    },
    gapSize: {
      gap: 8,
    },
    buttonIconLeft: {
      flexDirection: "row",
    },
    buttonIconRight: { 
      flexDirection: "row-reverse"
    },
    buttonWidthFull: {
      width: "100%",
    },
    buttonDisabled: {
      opacity: 0.5,
    },
    iconLeft: {
      marginRight: 8,
    },
    iconRight: {
      marginLeft: 8,
    },
    loadingContainer: {
      marginRight: 8,
    },
    loadingSize: {
        transform: [{scale: 0.72}],
        width: 20,
        height: 20,
    }
});

export const textSizeCls = {
  xs: {
    fontSize: size.fontSize?.caption,
  },
  sm: {
    fontSize: size.fontSize?.body2,
  },
  md: {
    fontSize: size.fontSize?.body1,
  },
  lg: {
    fontSize: size.fontSize?.label,
  },
  xl: {
    fontSize: size.fontSize?.h6,
  },
};

export const buttonSizeCls = {
  xs: {
    height: 32,
    paddingHorizontal: 9,
  },
  sm: {
    height: 36,
    paddingHorizontal: 12,
  },
  md: {
    height: 40,
    paddingHorizontal: 12,
  },
  lg: {
    height: 48,
    paddingHorizontal: 15,
  },
  xl: {
    height: 56,
    paddingHorizontal: 19,
  },
}