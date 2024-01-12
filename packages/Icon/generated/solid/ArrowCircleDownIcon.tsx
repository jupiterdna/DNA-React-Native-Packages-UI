//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ArrowCircleDownIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-6.24-.035L12 15.725l-3.76-3.76 1.06-1.06 1.95 1.949V8.14h1.5v4.713l1.95-1.95 1.06 1.06z" />
    </Svg>
  );
};
export default ArrowCircleDownIcon;
