//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ArrowCircleUpIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-13.76.032L12 8.272l3.76 3.76-1.06 1.06-1.95-1.949v4.713h-1.5v-4.713l-1.95 1.95-1.06-1.06z" />
    </Svg>
  );
};
export default ArrowCircleUpIcon;
