---
sidebar_position: 3
---

# Customization

After setting up your React Native app, you have the flexibility to tailor the theme according to your preferences, including customization of colors, fonts, and more. 

## Colors

Refer to the provided code example for instructions on overriding the color configuration.
```jsx
import React from 'react';
import {
  ThemeProvider,
  configType,
  themeConfig,
} from '@rndna/theme-provider';


const Native = () => {
    
  const config: themeConfig = {
    ...themeConfig,
        colors: {...themeConfig.colors, danger: 'red', default: 'black'},
  }

  return (
    <ThemeProvider config={config}>
    // your code
    </ThemeProvider>
  );
};

export default Native;

```

## Fonts
For handling fonts, utilize the following code snippet:

```jsx
import React from 'react';
import {
  ThemeProvider,
  configType,
  themeConfig,
} from '@rndna/theme-provider';


const Native = () => {
    
  const config: themeConfig = {
    ...themeConfig,
        colors: {...themeConfig.fonts: 'Roboto'},
  }

  return (
    <ThemeProvider config={config}>
    // your code
    </ThemeProvider>
  );
};

export default Native;

```