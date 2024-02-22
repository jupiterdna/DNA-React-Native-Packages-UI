import { StyleSheet } from "react-native";
import { useDNAWind } from "@rndna/base_style";

const dw = useDNAWind();

export const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  inner: {},
  wrapper: { overflow: "hidden" },
  core: {
    width: 1,
  },
  labelWrapper: {
    ...dw("w-full items-center justify-center flex-row absolute"),
  },
  label: {},
});
