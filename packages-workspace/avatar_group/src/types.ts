import { DNAAvatarProps } from "../../avatar/src/types";
import { sizeProps, colorProps, borderRadiusProps} from "@rndna/base_style";

export type DNAAvatarGroupProps = DNAAvatarProps & {
    options: Array<IGroupProps>
    borderRadius?: borderRadiusProps;
    size?: sizeProps;
    color?: colorProps;
    max?: number;
    addable?: boolean;
} 

export type IGroupProps = {
    src?: string;
    id?: string;
    name?: string;
    alt?: string;
}