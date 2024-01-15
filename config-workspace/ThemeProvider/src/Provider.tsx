import React from "react";
import { ThemeProviderProps } from './types';
import {defaultConfig} from './config/'
import { ThemeContext } from "./context";

/**
 * A component to set theme provider in your project.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ThemeProvider } from '@rndna/theme-provider';
 *
 * const ComponentName = () => (
 *  <ThemeProvider config={//your config}>
 *  //your children components
 * </ThemeProvider>
 * );
 *
 * export default ComponentName;
 * ```
 */

export const ThemeProvider:React.FC<ThemeProviderProps & {children?: React.JSX.Element}> = (props) =>{

  const {config, theme , children} = props

  return (
    <ThemeContext.Provider value={{
      config: config ? config : defaultConfig,
      theme: theme ? theme : 'light'
    }}>
      {children}
    </ThemeContext.Provider>
  );
};


