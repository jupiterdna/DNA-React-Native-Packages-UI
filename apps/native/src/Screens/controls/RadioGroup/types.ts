import {colorProps} from '@rndna/base_style';

export type helperFieldType = 'error' | 'success' | 'info' | 'warning';

export type assistiveTextType = {
  type: helperFieldType;
  message?: string;
};

export type colorTypes =
  | Exclude<colorProps, 'primary' | 'secondary' | 'danger' | 'default'>
  | 'error';

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
} & {
  children?: React.ReactNode;
};
