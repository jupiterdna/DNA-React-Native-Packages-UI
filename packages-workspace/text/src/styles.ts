import { StyleSheet } from 'react-native';
import { useFonts } from '@rndna/theme-provider';
 
const size = useFonts();

export const textSizeCls = StyleSheet.create({
  h1: {
    fontSize: size.fontSize?.h1,
  },
  h2: {
    fontSize: size.fontSize?.h2,
  },
  h3: {
    fontSize: size.fontSize?.h3,
  },
  h4: {
    fontSize: size.fontSize?.h4,
  },
  h5: {
    fontSize: size.fontSize?.h5,
  },
  h6: {
    fontSize: size.fontSize?.h6,
  },
  label: {
    fontSize: size.fontSize?.label,
  },
  body1: {
    fontSize: size.fontSize?.body1,
  },
  body2: {
    fontSize: size.fontSize?.body2,
  },
  caption: {
    fontSize: size.fontSize?.caption,
  },
  overline: {
    fontSize: size.fontSize?.overline,
  },
});