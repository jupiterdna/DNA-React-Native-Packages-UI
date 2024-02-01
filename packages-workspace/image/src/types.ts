import { GestureResponderEvent } from "react-native";
import { sizeProps, borderRadiusProps} from "@rndna/base_style";
import { FastImageProps } from "react-native-fast-image";

export interface DNAImageProps extends FastImageProps {
    /*
    * Property that allows you to define the desired width-to-height ratio of the image
    */
    ratio?: "1:1" | "3:2" | "4:3" | "8:5" | "16:9"
    /*
    *  Property that allows you to set the size to fit the available space of the image wrapper
    */
    fit?: "cover" | "contain";
    /*
    * Property that defines the source URL of the image/element to be used.
    */
    src?: string;
    /*
    * Property that defines the size of the component or a selection
    */
    size?: sizeProps;
    /*
    * Defines the border dimensions of the component
    */
    borderRadius?: borderRadiusProps;
}