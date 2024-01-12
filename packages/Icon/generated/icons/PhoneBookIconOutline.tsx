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
      <Path d="M7 7v2a8 8 0 008 8h2v-4h-4.5l-.576 1.152a6.03 6.03 0 01-2.076-2.076L11 11.5V7H7z" />
      <Path d="M3.25 5c0-.966.784-1.75 1.75-1.75h14c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0119 20.75H5A1.75 1.75 0 013.25 19v-2.25h-1.5a.75.75 0 010-1.5h1.5v-2.5h-1.5a.75.75 0 010-1.5h1.5v-2.5h-1.5a.75.75 0 010-1.5h1.5V5zM5 4.75a.25.25 0 00-.25.25v14c0 .138.112.25.25.25h14a.25.25 0 00.25-.25V5a.25.25 0 00-.25-.25H5z" />
    </Svg>
  );
};
const PhoneBookIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PhoneBookIconOutline;
