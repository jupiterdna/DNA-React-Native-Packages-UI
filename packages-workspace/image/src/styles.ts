import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  loadingIndicator: {
    position: "absolute",
    zIndex: 999,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
});

export const imageSizeCls = {
  xs: {
    width: 130,
  },
  sm: {
    width: 170,
  },
  md: {
    width: 210,
  },
  lg: {
    width: 250,
  },
  xl: {
    width: 290,
  },
};

export const imageRatioCls = {
  "1:1": {
    aspectRatio: 1,
  },
  "3:2": {
    aspectRatio: 3 / 2,
  },
  "4:3": {
    aspectRatio: 4 / 3,
  },
  "8:5": {
    aspectRatio: 8 / 5,
  },
  "16:9": {
    aspectRatio: 16 / 9,
  },
};
