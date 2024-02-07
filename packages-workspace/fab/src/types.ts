import { GestureResponderEvent, TouchableOpacityProps } from "react-native";
import { sizeProps, colorProps} from "@rndna/base_style";
import { SvgProps, NumberProp } from 'react-native-svg';

interface IProps extends SvgProps {
    /**
     * Where you can define the size of your icon
     */
    size?: NumberProp;
}
export interface DNAFabProps extends TouchableOpacityProps {
    /**
     * Property that defines the size of the component.
     */
    size?: sizeProps;
    /**
     * Property that  the FabItems display
     */
    isOpen?: boolean;
    /**
     * Defines the options or items.
    */
    items?: DNAFabItemTypes[];
    /**
     * Handler when the component is clicked
    */
    onPress?: (event: GestureResponderEvent) => void | undefined;
}

export type DNAFabItemTypes = {
    /**
     * Handler when the component is clicked
    */
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    /**
     *  Property that enables user to select icon from icon library.
    */
    icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element)
    /**
     *  Property that defines the text of the fab item.
    */
    title: string;
  };
  