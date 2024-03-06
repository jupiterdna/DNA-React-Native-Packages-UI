import React from "react";
import { ViewProps } from "react-native";
import { Container, Content } from "./components";
import PopOver from "./components/Popover";

export type ContainerProps = {
  /**
   * Property where you can define the mode of the component
   */
  mode?: "block" | "inline" | "dialog" | "float";
  /**
   * Property for defining the label
   */
  label?: string;
  /**
   * Property for defining the children
   */
  children?: React.ReactNode;
};

export type ContentProps = {
  /**
   * Property for defining the children
   */
  children?: React.ReactNode;
} & ViewProps;

export type DropdownProps = {
  /**
   * Property for defining the children
   */
  children?: React.ReactNode;
};

export type DropdownCompoundTypes = React.FC<DropdownProps> & {
  /**
   * Type definitions for the components in the drop-wrapper package.
   */
  Container: typeof Container; // Type definition for the Container component
  Popover: typeof PopOver; // Type definition for the Popover component
  Content: typeof Content; // Type definition for the Content component
};

export type PopOverProps = DropdownProps;
