import React from 'react';
import {ThemeProvider, darkmodeColor} from '@rndna/theme-provider';
import Testscreen from './src/Screens/Testscreen';
import {useColorScheme} from 'react-native';
import rnConfig from './src/themeConfig/index';


const Native = () => {
  const newConfig =
    useColorScheme() === 'light'
      ? rnConfig
      : {
          ...rnConfig,
          colors: darkmodeColor,
        };

  return (
    <ThemeProvider config={newConfig}>
      <Testscreen />
    </ThemeProvider>
  );
};

export default Native;
