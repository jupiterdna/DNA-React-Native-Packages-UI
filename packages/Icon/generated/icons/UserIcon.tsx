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
      <Path d="M12 3.214a4.074 4.074 0 10.002 8.151A4.074 4.074 0 0012 3.216zM3.75 20.786v-3.448c0-.683.37-1.264.84-1.712.473-.453 1.12-.842 1.857-1.16 1.478-.64 3.456-1.048 5.553-1.048s4.075.409 5.553 1.047c.737.319 1.384.708 1.858 1.162.468.447.839 1.028.839 1.711v3.448H3.75z" />
    </Svg>
  );
};
const UserIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserIcon;
