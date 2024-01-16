import { StyleSheet } from 'react-native';
import { useFonts } from "@rndna/theme-provider"

const fontSize = useFonts();

export const styles = StyleSheet.create({
    button: {
      height: 34,
      paddingHorizontal: 16,
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
  sm: {
    fontSize: 14,
  },
  default: {
    fontSize: 16,
  },
  md: {
    fontSize: 18,
  },
  lg: {
    fontSize: 20,
  },
};

export const buttonSizeCls = {
  sm: {
    height: 28,
    paddingHorizontal: 8,
  },
  default: {
    height: 34,
    paddingHorizontal: 12,
  },
  md: {
    height: 40,
    paddingHorizontal: 16,
  },
  lg: {
    height: 48,
    paddingHorizontal: 20,
  },
}