import { StyleSheet } from "react-native";

export const getFontSize = (font: any) => {
  return StyleSheet.create({
    h1: {
      fontSize: font.fontSize?.h1,
    },
    h2: {
      fontSize: font.fontSize?.h2,
    },
    h3: {
      fontSize: font.fontSize?.h3,
    },
    h4: {
      fontSize: font.fontSize?.h4,
    },
    h5: {
      fontSize: font.fontSize?.h5,
    },
    h6: {
      fontSize: font.fontSize?.h6,
    },
    label: {
      fontSize: font.fontSize?.label,
    },
    body1: {
      fontSize: font.fontSize?.body1,
    },
    body2: {
      fontSize: font.fontSize?.body2,
    },
    caption: {
      fontSize: font.fontSize?.caption,
    },
    overline: {
      fontSize: font.fontSize?.overline,
    },
  });
};
