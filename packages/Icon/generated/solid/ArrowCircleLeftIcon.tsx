//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ArrowCircleLeftIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10.038-3.76L8.278 12l3.76 3.76 1.06-1.06-1.95-1.95h4.713v-1.5H11.15l1.95-1.95-1.061-1.06z" />
    </Svg>
  );
};
export default ArrowCircleLeftIcon;
