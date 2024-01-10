import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 99,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 4,
  },
  closeIcon: {
    marginLeft: 4,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});

export const textSizeCls = {
  sm: {
    fontSize: 8,
  },
  default: {
    fontSize: 10,
  },
  md: {
    fontSize: 12,
  },
  lg: {
    fontSize: 14,
  },
};

export const chipSizeCls = {
  sm: {
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  default: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  md: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  lg: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
}