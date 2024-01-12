//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ChevronUpIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2.36 16.025l1.06 1.06L12 8.505l8.58 8.58 1.06-1.06L12 6.385l-9.64 9.64z" />
    </Svg>
  );
};
export default ChevronUpIcon;
