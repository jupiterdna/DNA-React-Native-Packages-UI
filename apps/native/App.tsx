import React from 'react';
import {ThemeProvider, themeConfig} from '@rndna/theme-provider';
import Testscreen from './src/Screens/Testscreen';

const Native = () => {
  return (
    <ThemeProvider config={themeConfig}>
       <Testscreen />
    </ThemeProvider>
  );
};

export default Native;

