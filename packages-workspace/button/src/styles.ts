import { StyleSheet } from 'react-native';
import { useFonts } from "@rndna/theme-provider"

const fontSize = useFonts();

export const styles = StyleSheet.create({
    button: {
      paddingVertical: 12,
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
        transform: [{scale: 0.74}]
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
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  default: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  md: {
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  lg: {
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
}