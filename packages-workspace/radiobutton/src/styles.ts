import { StyleSheet } from 'react-native';
import { defaultColors } from "@rndna/base_style";

export const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
  },
  radioInner: {
    width: 16,
    height: 16,
    borderRadius: 99,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: defaultColors.primary,
    marginRight: 6,
  },
  radioWrapper: {
    flexDirection: 'column',
    borderWidth: 1,
    width: '100%',
  },
  checked: {
    backgroundColor: defaultColors.primary,
    borderRadius: 99,
  },
  compactGap: {
    marginBottom: 4,
    marginRight: 8,
  },
  defaultGap: {
    marginBottom: 8,
    marginRight: 16,
  },
  comfortableGap: {
    marginBottom: 12,
    marginRight: 24,
  },
  disabled: {
    opacity: 0.5,
  },
  childoption: {
    marginLeft: 24,
  },
});

export const buttonSizeCls = {
  xs: {
    width: 14,
    height: 16,
  },
  sm: {
    width: 16,
    height: 16,
  },
  md: {
    width: 18,
    height: 18,
  },
  lg: {
    width: 20,
    height: 20,
  },
  xl: {
    width: 24,
    height: 24,
  },
};

export const textSizeCls = {
  xs: {
    fontSize: 10,
  },
  sm: {
    fontSize: 12,
  },
  md: {
    fontSize: 14,
  },
  lg: {
    fontSize: 16,
  },
  xl: {
    fontSize: 18,
  },
};
