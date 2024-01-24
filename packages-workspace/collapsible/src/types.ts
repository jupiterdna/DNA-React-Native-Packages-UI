import { colorProps } from "@rndna/base_style";

export interface DNACollapsibleProps {
  /**
   * Where you can define the text on the panel header
   */
  title: string
  /**
   * Property allows you to create a generic template component that can be modified by the parent when it is invoked
   */
  children?: React.ReactNode
  /**
   * Property that changes theme/state of the selection i.e. background and text color
   */
  color?: colorProps;
  /**
   * Property that allows you to set a height of the content inside this component
   */
  height?: number;
  /**
   * Property that allows you to set display or hide the content by default
   */
  isOpen?: boolean;
}