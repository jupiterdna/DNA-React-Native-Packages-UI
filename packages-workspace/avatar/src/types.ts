import { GestureResponderEvent, PressableProps } from "react-native";
import { sizeProps, colorProps, borderRadiusProps, variantProps } from "@rndna/base_style";
import { SvgProps, NumberProp } from 'react-native-svg';

interface IProps extends SvgProps {
    size?: NumberProp;
}

export interface DNAAvatarProps extends PressableProps {
    label?: string;
    name?: string;
    imageSource?: string;
    size?: sizeProps;
    borderRadius?: borderRadiusProps;
    color?: colorProps;
    icon?: React.JSX.Element | ((e?: IProps | any) => React.JSX.Element)
    onPress?: (event: GestureResponderEvent) => void;
}
export type DNAAvatarPropsWithStatus = DNAAvatarProps & {
    status: IWithStatusType;
} 

export type IWithStatusType = {
    option?: "online" | "offline" | "inactive" | "busy" | undefined;
    value?: string;
}
  
export type DNAAvatarPropsWithBadge = DNAAvatarProps & {
    badge: IWithBadgeType;
} 

export type IWithBadgeType = {
    color?: colorProps;
    value?: string;
}
  