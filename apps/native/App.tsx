import React, {useEffect} from 'react';
import {ThemeProvider, darkmodeColor, themeConfig} from '@rndna/theme-provider';
import Testscreen from './src/Screens/Testscreen';
import {useColorScheme} from 'react-native';
import {DNAButton} from '@rndna/button';

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
      <DNAButton
        onPress={() => {
          // handleChangeScheme();
        }}
        label="Change Color"
      />
    </ThemeProvider>
  );
};

export default Native;
