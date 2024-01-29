import { StyleSheet } from 'react-native';
import { useColor } from '@rndna/theme-provider';

const themeColor = useColor();
const defaultColors = themeColor["primary"]["default"];

export const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerWrapper: {
    width: 16,
    height: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  unCheckedInner: {
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: defaultColors,
  },
  checkedInner: {
    backgroundColor: defaultColors,
  },
  checkWrapper: {
    flexDirection: 'column',
    borderWidth: 1,
    width: '100%',
  },
  checked: {
    backgroundColor: defaultColors,
    borderRadius: 99,
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