import { GestureResponderEvent } from "react-native";
import { sizeProps, borderRadiusProps} from "@rndna/base_style";
import { FastImageProps } from "react-native-fast-image";

export interface DNAImageProps extends FastImageProps {
    ratio?: "1:1" | "3:2" | "4:3" | "8:5" | "16:9"
    fit?: "cover" | "contain";
    src?: string;
    size?: sizeProps;
    ref?: any,
    borderRadius?: borderRadiusProps;
    onPress?: (event: GestureResponderEvent) => void;
}