import { StyleProp, ViewStyle } from "react-native";

export type BlockContainerProps = {
  /**
   * Property to open the modal
   */
  open?: boolean;
  /**
   * Property to close the modal
   */
  closeModal: () => void;
  /**
   * Optional label for the container
   */
  label?: string;
  /**
   * Optional children components
   */
  children?: React.ReactNode;
  /**
   * Optional style for the container
   */
  style?: StyleProp<ViewStyle>;
};

export type BlockContainerRefProps = {
  /**
   * Property to open the modal callback
   */
  handleOpen: () => void;
} | null;

export type DialogContainerProps = BlockContainerProps;
export type DialogContainerRefProps = BlockContainerRefProps;
export type InlineContainerRefProps = BlockContainerRefProps;
export type InlineContainerProps = BlockContainerProps & { position?: any };
