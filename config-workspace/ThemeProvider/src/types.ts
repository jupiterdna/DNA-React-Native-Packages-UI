export type colorType = {
  ["default"]: string;
  [50]: string;
  [100]: string;
  [200]: string;
  [400]: string;
  [600]: string;
  [700]: string;
};

export type fontSizeType = {
  h1: number,
  h2: number,
  h3: number,
  h4: number,
  h5: number,
  h6: number,
  subtitle1: number,
  subtitle2: number,
  body1: number,
  body2: number,
  caption: number,
  overline: number
}

export type configType = {
  spacing: {
    [0]: number;
    [1]: number;
    [2]: number;
    [3]: number;
    [4]: number;
    [5]: number;
    [6]: number;
    [6]: number;
    [7]: number;
    [8]: number;
    [9]: number;
    [10]: number;
    [11]: number;
    [12]: number;
    [13]: number;
    [14]: number;
    [15]: number;
    [16]: number;
    [17]: number;
    [18]: number;
  };
  colors?: {
    primary: colorType;
    secondary: colorType;
    info: colorType;
    success: colorType;
    warning: colorType;
    danger: colorType;
    default: colorType;
  };
  fonts?: {
    fontFamily?: string;
    fontWeight?:
      | "bold"
      | "semi-bold"
      | "normal"
      | "thin"
      | 300
      | 400
      | 500
      | 700;
      fontSize?: fontSizeType
  },
};

export interface ThemeProviderProps {
  /**
   * configuration of all theme properties
   */
  config: configType;
  /**
   * set theme either dark or light default is light
   */
  theme?: 'dark' | 'light'
}
