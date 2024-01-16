import React from 'react';
import {ThemeProvider, darkmodeColor, themeConfig} from '@rndna/theme-provider';
import Testscreen from './src/Screens/Testscreen';
import {useColorScheme} from 'react-native';

const Native = () => {
  const newConfig =
    useColorScheme() === 'light'
      ? themeConfig
      : {
          ...themeConfig,
          colors: darkmodeColor,
        };

  return (
    <ThemeProvider config={newConfig}>
      <Testscreen />
    </ThemeProvider>
  );
};

export default Native;
