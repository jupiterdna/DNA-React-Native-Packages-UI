import {Appearance} from 'react-native';

import {darkmodeColor, themeConfig} from '@rndna/theme-provider';

const rnConfig =
  Appearance.getColorScheme() === 'light'
    ? themeConfig
    : {
        ...themeConfig,
        colors: darkmodeColor,
      };

export default rnConfig;
