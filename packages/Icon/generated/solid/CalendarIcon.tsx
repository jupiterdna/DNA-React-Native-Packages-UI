//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CalendarIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M16.419 3.989H7.58V2.011h-1.5v1.978H5.25A2.25 2.25 0 003 6.239v13.5a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25v-13.5a2.25 2.25 0 00-2.25-2.25h-.831V2.011h-1.5v1.978zM4.5 9.489h15v10.25a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.489z" />
    </Svg>
  );
};
export default CalendarIcon;
