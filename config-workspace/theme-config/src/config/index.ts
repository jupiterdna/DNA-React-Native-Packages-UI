import { configType } from "./types";
import { lightModeColor, darkmodeColor } from "./themeColor";

export const defaultConfig: configType = {
  spacing: {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 4,
    "4": 8,
    "5": 12,
    "6": 16,
    "7": 20,
    "8": 24,
    "9": 28,
    "10": 32,
    "11": 36,
    "12": 40,
    "13": 44,
    "14": 48,
    "15": 52,
    "16": 56,
    "17": 60,
    "18": 64,
  },
  colors: {
    dark: darkmodeColor,
    light: lightModeColor,
  },
  fonts: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: {
      h1: 96,
      h2: 60,
      h3: 48,
      h4: 34,
      h5: 24,
      h6: 20,
      label: 18,
      body1: 16,
      body2: 14,
      caption: 12,
      overline: 10,
    },
  },
};
