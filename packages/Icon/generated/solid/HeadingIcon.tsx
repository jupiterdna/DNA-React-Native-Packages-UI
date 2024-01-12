//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const HeadingIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M5.25 20.253V3.746h1.5v7.005h10.5V3.746h1.5v16.507h-1.5v-8.002H6.75v8.002h-1.5z" />
    </Svg>
  );
};
export default HeadingIcon;
