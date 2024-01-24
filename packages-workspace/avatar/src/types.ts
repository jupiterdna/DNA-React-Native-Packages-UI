import { GestureResponderEvent, PressableProps } from "react-native";
import { sizeProps, colorProps, borderRadiusProps} from "@rndna/base_style";
import { SvgProps, NumberProp } from 'react-native-svg';

interface IProps extends SvgProps {
    /**
     * Where you can define the size of your icon
     */
    size?: NumberProp;
}
export interface DNAAvatarProps extends PressableProps {
    /**
     * Property that defines the full name of the avatar.
     */
    name?: string;
    /**
     * Property that defines the source URL of the image/element to be used.
     */
    imageSource?: string;
    /**
     * Property that defines the size of the component.
     */
    size?: sizeProps;
    /**
     * Property that defines the border dimensions of the component.
     */
    borderRadius?: borderRadiusProps;
    /**
     * Property that changes theme of the component, i.e. background and text color,
     */
    color?: colorProps;
    /**
     * Property that defines the alternative text of the image in the avatar.
    */
    alt?: string,
    /**
     * Property that enables user to select icon from icon library.
    */
    icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element)
    /**
     * Handler when the component is clicked
    */
    onPress?: (event: GestureResponderEvent) => void;
}
export type DNAAvatarPropsWithStatus = DNAAvatarProps & {
    /**
     * Property that defines status of the avatar where it will be "online" | "offline" | "inactive" | "busy" | undefined;
    */
    status: IWithStatusType;
} 

export type IWithStatusType = {
    /**
     * Property that defines status option of the avatar
    */
    option?: "online" | "offline" | "inactive" | "busy" | undefined;
    /**
     * Property that defines value of the option chosen
    */
    value?: string;
}
  
export type DNAAvatarPropsWithBadge = DNAAvatarProps & {
    /**
     * Property that defines badge of the avatar
    */
    badge: IWithBadgeType;
} 

export type IWithBadgeType = {
    /**
     * Property that changes background of the badge,
     */
    color?: colorProps;
    /**
     * Property that defines the text of the badge.
     */
    value?: string;
}
  