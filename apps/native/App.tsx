import React from 'react';
import {useColorScheme} from 'react-native';
import {
  ThemeProvider,
  configType,
  darkmodeColor,
  themeConfig,
} from '@rndna/theme-provider';
import Testscreen from './src/Screens/Testscreen';

const Native = () => {
  const rnConfig: configType =
    useColorScheme() === 'light'
      ? {
          ...themeConfig,
          fonts: {...themeConfig.fonts, fontFamily: 'Lato'},
        }
      : {
          ...themeConfig,
          colors: darkmodeColor,
          fonts: {...themeConfig.fonts, fontFamily: 'Lato'},
        };

  return (
    <ThemeProvider config={rnConfig}>
      <>
        <Testscreen />
      </>
    </ThemeProvider>
  );
};

export default Native;
