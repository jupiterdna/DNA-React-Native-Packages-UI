//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const AnalogClockIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2 12C2 6.477 6.478 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10C6.478 22 2 17.523 2 12zm10.75.266V8.17h-1.5v4.719l3.264 3.263 1.06-1.06-2.824-2.825zm7.709.484v-1.5h-2.075v1.5h2.075zm-16.918 0h2.075v-1.5H3.541v1.5zm9.209-9.209h-1.5v2.075h1.5V3.541zm0 16.918v-2.075h-1.5v2.075h1.5z" />
    </Svg>
  );
};
export default AnalogClockIcon;
