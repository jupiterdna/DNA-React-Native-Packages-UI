import React from 'react';
import {useColorScheme} from 'react-native';
import {
  ThemeProvider,
  configType,
  darkmodeColor,
  themeConfig,
} from '@rndna/theme-provider';
import Testscreen from './src/Screens/Testscreen';
import DropdownScreen from './src/Screens/DropdownScreen';

const Native = () => {
  const rnConfig: configType =
    useColorScheme() === 'light'
      ? {
          ...themeConfig,
          fonts: {...themeConfig.fonts, fontFamily: 'Roboto'},
        }
      : {
          ...themeConfig,
          colors: darkmodeColor,
          fonts: {...themeConfig.fonts, fontFamily: 'Roboto'},
        };

  return (
    <ThemeProvider config={rnConfig}>
      <>
        <DropdownScreen />
      </>
    </ThemeProvider>
  );
};

export default Native;
