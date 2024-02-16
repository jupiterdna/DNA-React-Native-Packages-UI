import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textInputContainer: {
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  assistiveTextContainer: {
    position: "absolute",
    bottom: -24,
    fontSize: 12,
    left: 2,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 3,
  },
  assistiveText: { fontSize: 12 },
  required: { top: -10, fontSize: 11 },
  label: { fontSize: 13 },
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 10,
    marginBottom: 35,
  },
  prefixStyle: {
    marginRight: 5,
  },
});
