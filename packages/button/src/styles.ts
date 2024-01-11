import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
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
    fontSize: 12,
  },
  default: {
    fontSize: 14,
  },
  md: {
    fontSize: 16,
  },
  lg: {
    fontSize: 18,
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