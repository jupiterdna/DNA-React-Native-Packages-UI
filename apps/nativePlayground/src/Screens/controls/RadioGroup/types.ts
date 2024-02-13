import {colorProps} from '@rndna/base_style';
import React from 'react';
import {NumberProp, SvgProps} from 'react-native-svg';

export type helperFieldType = 'error' | 'success' | 'info' | 'warning';

export interface IProps extends SvgProps {
  size?: NumberProp;
}

export type assistiveTextType = {
  type: helperFieldType;
  message?: string;
  icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element);
};

export type colorTypes =
  | Exclude<colorProps, 'primary' | 'secondary' | 'danger' | 'default'>
  | 'error';

export type RadioCustomTypes<T = any> = React.ReactNode & {props?: T; type?: T};

export type RadioGroupTypes = {
  /**
   * Property where the user can enable or disable the certain attribute or field.
   */
  disabled?: boolean;
  /**
   * Display any assistive object or array of messages under the component (e.g. Warning or Error, etc.)
   */
  assistiveText?: assistiveTextType;
  /**
   * Property that shows the field is mandatory to be filled before submitting.
   */
  required?: boolean;
  /**
   * Shows a descriptive text in a field before the field is typed in.
   */
  label?: string;
  /**
   * The property that aligns the elements of the components
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Property that accept react node as children of radio group
   */
  children?: React.ReactNode & {type: any; props: any};
};
