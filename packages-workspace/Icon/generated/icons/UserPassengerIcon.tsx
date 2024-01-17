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
      <Path d="M12 3.214a4.074 4.074 0 10.002 8.151A4.074 4.074 0 0012 3.216zM3.75 20.786v-3.448c0-.683.37-1.264.84-1.712.473-.453 1.12-.842 1.857-1.16.442-.192.93-.362 1.45-.507l6.828 6.827H3.75zM9.65 13.59c-.614.09-1.202.216-1.752.369L3.016 9.076v-2.12L9.65 13.59zM9.65 13.59a16.081 16.081 0 012.35-.172c2.097 0 4.075.409 5.553 1.047.737.319 1.384.708 1.858 1.162.468.447.839 1.028.839 1.711v3.448h-3.404L9.65 13.59z" />
    </Svg>
  );
};
const UserPassengerIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserPassengerIcon;
