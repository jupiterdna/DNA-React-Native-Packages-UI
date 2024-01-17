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
      <Path d="M10.43 11.396H8.468l2.66 4.844v2.429h1.747V16.24l2.66-4.844H13.57l-1.538 3.044h-.064l-1.537-3.044z" />
      <Path d="M7.581 3.989h8.838V2.011h1.5v1.978h.831A2.25 2.25 0 0121 6.239v13.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.739v-13.5a2.25 2.25 0 012.25-2.25h.831V2.011h1.5v1.978zM4.5 19.739c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9.563h-15v10.176z" />
    </Svg>
  );
};
const CalendarYearIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CalendarYearIcon;
