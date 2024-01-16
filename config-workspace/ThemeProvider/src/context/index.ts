import { createContext } from 'react';
import {ThemeProviderProps} from '../types'

import {defaultConfig} from '../config'

export const ThemeContext = createContext<ThemeProviderProps>({config: defaultConfig, theme: 'light'});