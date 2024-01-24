import { DNAAvatarProps } from "../../avatar/src/types";
import { sizeProps, colorProps, borderRadiusProps} from "@rndna/base_style";

export type DNAAvatarGroupProps = DNAAvatarProps & {
    /**
     * Defines the options or items of the data.
    */
    options: Array<IGroupProps>
    /**
     * Property that defines the border dimensions of the component.
    */
    borderRadius?: borderRadiusProps;
    /**
     * Property that defines the size of the component.
    */
    size?: sizeProps;
    /**
     * Property that changes background color of the avatar when displayed the name initials
    */
    color?: colorProps;
    /**
     * Defines the maximum number of avatars display.
    */
    max?: number;
    /**
     * Property that added extra avatar with Plus sign after the last item.
    */
    addable?: boolean;
} 

export type IGroupProps = {
    /**
     * Object Property that defines the source URL of the image/element to be used.
    */
    src?: string;
    /**
     * Object Property is used to pass in the id parameter of code.
    */
    id?: string;
    /**
     * Object Property that defines the full name of the avatar.
    */
    name?: string;
    /**
     * Object Property that defines the alternative text of the image in the avatar.
    */
    alt?: string;
}