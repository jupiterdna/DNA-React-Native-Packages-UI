//this is auto-generated files please do not edit!
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const wrapper = (props: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M7.581 3.989h8.838V2.01h1.5v1.979h.831A2.25 2.25 0 0121 6.239v7.644l-1.5-1.255V9.562h-15v10.176c0 .415.336.75.75.75h7.52l-.002 1.087c0 .142.01.28.03.413H5.25A2.25 2.25 0 013 19.738v-13.5a2.25 2.25 0 012.25-2.25h.831V2.01h1.5v1.979z" />
      <Path d="M6.75 12.01h5v5h-5v-5zM14.768 21.577a.5.5 0 00.842.365l1.726-1.626 1.68 3.601 2.718-1.268-1.68-3.602 2.357-.276a.5.5 0 00.263-.88l-7.072-5.916a.502.502 0 00-.774.17.502.502 0 00-.046.213l-.014 9.22z" />
    </Svg>
  );
};
const CalendarBookingTypeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CalendarBookingTypeIcon;
