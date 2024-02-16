import { I18nManager, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainWrap: {
    justifyContent: "center",
  },
  container: {
    flexShrink: 1,
    borderWidth: 0.5,
    borderColor: "#EEEEEE",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  flex1: {
    flex: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  wrapTop: {
    justifyContent: "flex-end",
  },
  dropdown: {
    // flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // height: 35,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginVertical: 5,
    fontSize: 16,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#DDDDDD",
    paddingHorizontal: 8,
    marginBottom: 8,
    margin: 6,
    height: 45,
  },
  fullScreen: {
    alignItems: "center",
    justifyContent: "center",
  },
});

import { useFonts } from "@rndna/theme-provider";

const size = useFonts();

export const drop_styles = StyleSheet.create({
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
    flexDirection: "row-reverse",
  },
  buttonWidthFull: {
    width: "100%",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonPressed: {},
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
    transform: [{ scale: 0.72 }],
    width: 20,
    height: 20,
  },
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
};
