import { sizeProps } from "@dnamobile/base_style";

export interface RadioButtonProps {
  label: string;
  options: Option[];
  disabled?: boolean;
  childrenOptions?: ChildrenOption[];
  required?: boolean;
  size?: sizeProps;
  gap_y?: 'compact' | 'default' | 'comfortable';
  gap_x?: 'compact' | 'default' | 'comfortable';
  onChange: (selectedOption: Option) => void;
  orientation?: 'vertical' | 'horizontal';
  selected?: any;
}

export interface Option {
  id: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  childrenOptions?: ChildrenOption[];
  selected?: any;
}

export interface ChildrenOption {
  id: string;
  value: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  selected?: any;
}
