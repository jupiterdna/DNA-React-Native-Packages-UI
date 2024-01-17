import React from 'react';
import {ThemeProvider} from '@rndna/theme-provider';
import Testscreen from './src/Screens/Testscreen';
import rnConfig from './src/themeConfig/index';

const Native = () => {
  return (
    <ThemeProvider config={rnConfig}>
      <>
        <Testscreen />
      </>
    </ThemeProvider>
  );
};

export default Native;
