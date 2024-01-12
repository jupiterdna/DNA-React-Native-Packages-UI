//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CalendarBusyIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M13.06 15.045l2.41-2.41-1.06-1.06L12 13.983l-2.41-2.41-1.06 1.061 2.41 2.41-2.41 2.41 1.06 1.06 2.41-2.41 2.41 2.41 1.06-1.061-2.41-2.41z" />
      <Path d="M7.581 3.988h8.838V2.01h1.5v1.978h.831A2.25 2.25 0 0121 6.238v13.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.738v-13.5a2.25 2.25 0 012.25-2.25h.831V2.01h1.5v1.978zM4.5 19.738c0 .415.336.75.75.75h13.5a.75.75 0 00.75-.75V9.562h-15v10.176z" />
    </Svg>
  );
};
export default CalendarBusyIcon;
