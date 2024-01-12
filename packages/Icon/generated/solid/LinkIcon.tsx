//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const LinkIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M1.982 12c0-2.735 2.137-4.952 4.772-4.952h3.99V8.68h-3.99c-1.766 0-3.199 1.486-3.199 3.32 0 1.833 1.433 3.32 3.2 3.32h3.989v1.632h-3.99c-2.635 0-4.772-2.217-4.772-4.952zM22.018 12c0-2.735-2.137-4.952-4.772-4.952h-3.99V8.68h3.99c1.766 0 3.199 1.486 3.199 3.32 0 1.833-1.433 3.32-3.2 3.32h-3.989v1.632h3.99c2.635 0 4.772-2.217 4.772-4.952z" />
      <Path d="M8.07 11.184h7.87v1.632H8.07v-1.632z" />
    </Svg>
  );
};
export default LinkIcon;
