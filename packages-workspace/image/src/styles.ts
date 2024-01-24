import { StyleSheet } from 'react-native';
import { useColor } from '@rndna/theme-provider';

const themeColor = useColor();
const bgColor =  themeColor["primary"][50];

export const styles = StyleSheet.create({
  imageWrapper:{
    backgroundColor: bgColor,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export const imageSizeCls = {
  xs: {
    width: 130
  },
  sm: {
    width: 170
  },
  md: {
    width: 210
  },
  lg: {
    width: 250
  },
  xl: {
    width: 290
  },
}

export const imageRatioCls = {
  "1:1": {
    aspectRatio: 1,
  },
  "3:2": {
    aspectRatio: 3/2,
  },
  "4:3": {
    aspectRatio: 4/3,
  },
  "8:5": {
    aspectRatio: 8/5,
  },
  "16:9": {
    aspectRatio: 16/9,
  },
}