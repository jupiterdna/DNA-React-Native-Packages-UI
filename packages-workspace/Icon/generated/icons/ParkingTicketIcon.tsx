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
      <Path d="M13.313 9.864a1.28 1.28 0 00-1.279-1.28h-1.269v2.56h1.27a1.28 1.28 0 001.278-1.28z" />
      <Path d="M21 3.11c.967 0 1.75.783 1.75 1.75v2.06A1.75 1.75 0 0121 8.67h-2.212v12.22l-1.763-1.543-1.686 1.543-1.687-1.543-1.686 1.543-1.687-1.543-1.686 1.543-1.687-1.543L5.22 20.89V8.67H3a1.75 1.75 0 01-1.75-1.75V4.86c0-.967.783-1.75 1.75-1.75h18zM2.75 4.86v2.06c0 .137.111.25.25.25h2.22V4.61H3a.25.25 0 00-.25.25zm16.038 2.31H21a.25.25 0 00.25-.25V4.86a.25.25 0 00-.25-.25h-2.212v2.56zm-8.023 7.563v-2.09h1.27a2.78 2.78 0 000-5.559h-2.77v7.649h1.5z" />
    </Svg>
  );
};
const ParkingTicketIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ParkingTicketIcon;
