import {View, Text, useColorScheme} from 'react-native';
import React from 'react';

import {
  ThemeProvider,
  configType,
  darkmodeColor,
  themeConfig,
} from '@rndna/theme-provider';

import RippleScreen from './RippleScreen';

const Native = () => {
  const rnConfig: configType =
    useColorScheme() === 'light'
      ? {
          ...themeConfig,
          fonts: {...themeConfig.fonts, fontFamily: 'Roboto'},
        }
      : {
          ...themeConfig,
          fonts: {...themeConfig.fonts, fontFamily: 'Roboto'},
          colors: {...themeConfig.colors, danger: 'red', default: 'black'},},
        };

  return (
    <ThemeProvider config={rnConfig}>
      <>
        {/* <AnimatedScreen /> */}
        {/* <Testscreen /> */}
        <RippleScreen />
      </>
    </ThemeProvider>
  );
};

export default Native;
