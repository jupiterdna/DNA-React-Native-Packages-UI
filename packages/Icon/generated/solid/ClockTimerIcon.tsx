//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ClockTimerIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M9.18 2.851h5.64v-1.5H9.18v1.5zM12 4.776a8.825 8.825 0 106.706 3.09l1.514-1.514-1.06-1.061-1.522 1.521A8.79 8.79 0 0012 4.776zm-.75 9.647V8.686h1.5v5.737h-1.5z" />
    </Svg>
  );
};
export default ClockTimerIcon;
