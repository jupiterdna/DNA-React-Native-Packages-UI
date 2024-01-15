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
      <Path d="M10.765 12.644v2.089h-1.5V7.084h2.769a2.78 2.78 0 010 5.56h-1.27zm1.269-4.06h-1.27v2.56h1.27a1.28 1.28 0 000-2.56z" />
      <Path d="M5.22 8.67H3a1.75 1.75 0 01-1.75-1.75V4.86c0-.967.783-1.75 1.75-1.75h18c.967 0 1.75.783 1.75 1.75v2.06A1.75 1.75 0 0121 8.67h-2.212v12.22l-1.763-1.543-1.686 1.543-1.687-1.543-1.686 1.543-1.687-1.543-1.686 1.543-1.687-1.543L5.22 20.89V8.67zM2.75 4.86v2.06c0 .137.111.25.25.25h2.22V4.61H3a.25.25 0 00-.25.25zm16.038 2.31H21a.25.25 0 00.25-.25V4.86a.25.25 0 00-.25-.25h-2.212v2.56zm-1.5 10.673V4.61H6.719v13.233h10.57z" />
    </Svg>
  );
};
const ParkingTicketIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ParkingTicketIconOutline;
