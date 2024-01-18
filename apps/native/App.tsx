import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider, darkmodeColor, themeConfig} from '@rndna/theme-provider';
import Testscreen from './src/Screens/Testscreen';

const Native = () => {
  const rnConfig =
    useColorScheme() === 'light'
      ? themeConfig
      : {
          ...themeConfig,
          colors: darkmodeColor,
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
