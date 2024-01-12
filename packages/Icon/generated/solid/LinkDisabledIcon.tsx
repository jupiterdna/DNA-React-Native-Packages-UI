//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const LinkDisabledIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M10.638 12.817l9.644 9.644 1.06-1.06L2.597 2.653l-1.06 1.061 3.618 3.62C3.306 8.015 1.982 9.847 1.982 12c0 2.735 2.137 4.952 4.772 4.952h3.99V15.32h-3.99c-1.766 0-3.199-1.487-3.199-3.32 0-1.748 1.303-3.181 2.956-3.31l2.494 2.494H8.07v1.633h2.568zM22.018 12c0 1.99-1.133 3.707-2.765 4.494l-1.264-1.264c1.408-.348 2.456-1.662 2.456-3.23 0-1.833-1.433-3.32-3.2-3.32h-3.989V7.048h3.99c2.635 0 4.772 2.217 4.772 4.952z" />
      <Path d="M15.94 12.817h-.364l-1.633-1.633h1.996v1.633z" />
    </Svg>
  );
};
export default LinkDisabledIcon;
