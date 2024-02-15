import {View, Text, useColorScheme} from 'react-native';
import React from 'react';

import {
  ThemeProvider,
  configType,
  darkmodeColor,
  themeConfig,
} from '@rndna/theme-provider';
import AnimatedScreen from './TextFieldScreen';

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
          colors: darkmodeColor,
          fonts: {...themeConfig.fonts, fontFamily: 'Roboto'},
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
