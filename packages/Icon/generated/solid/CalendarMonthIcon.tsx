//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CalendarMonthIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M10.11 11.396H7.934v7.273h1.711v-4.492h.06l1.748 4.446h1.094l1.747-4.421h.06v4.467h1.712v-7.273h-2.177L12.042 15.9h-.085l-1.847-4.503z" />
      <Path d="M7.581 3.989h8.838V2.011h1.5v1.978h.831A2.25 2.25 0 0121 6.239v13.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.739v-13.5a2.25 2.25 0 012.25-2.25h.831V2.011h1.5v1.978zM4.5 19.739c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9.563h-15v10.176z" />
    </Svg>
  );
};
export default CalendarMonthIcon;
