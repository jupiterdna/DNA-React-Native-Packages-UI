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
      <Path d="M10.937 18.108l5.46-5.46-1.06-1.061-4.4 4.4-2.197-2.194-1.06 1.061 3.257 3.254z" />
      <Path d="M7.581 3.99h8.838V2.01h1.5v1.98h.831A2.25 2.25 0 0121 6.24v13.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.74V6.24a2.25 2.25 0 012.25-2.25h.831V2.01h1.5v1.98zM5.25 5.49a.75.75 0 00-.75.75v1.823h15V6.239a.75.75 0 00-.75-.75H5.25zM4.5 19.74c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9.562h-15v10.176z" />
    </Svg>
  );
};
const CalendarCheckIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CalendarCheckIconOutline;