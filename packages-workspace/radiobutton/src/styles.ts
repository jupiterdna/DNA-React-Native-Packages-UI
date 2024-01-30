import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioInner: {
    width: 16,
    height: 16,
    borderRadius: 99,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  radioWrapper: {
    flexDirection: 'column',
    borderWidth: 1,
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
});

export const buttonSizeCls = {
  xs: {
    width: 14,
    height: 14,
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