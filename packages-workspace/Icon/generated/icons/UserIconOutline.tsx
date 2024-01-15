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
      <Path d="M12 3.214a4.074 4.074 0 10.002 8.151A4.074 4.074 0 0012 3.216zM9.426 7.29a2.575 2.575 0 115.149 0 2.575 2.575 0 01-5.15 0zM3.75 20.786v-3.448c0-.683.37-1.264.84-1.712.473-.453 1.12-.842 1.857-1.16 1.478-.64 3.456-1.048 5.553-1.048s4.075.409 5.553 1.047c.737.319 1.384.708 1.858 1.162.468.447.839 1.028.839 1.711v3.448H3.75zm1.5-3.448v1.948h13.5v-1.948c0-.115-.064-.33-.375-.627-.304-.29-.78-.594-1.416-.869-1.268-.547-3.04-.924-4.959-.924-1.919 0-3.691.377-4.959.924-.636.275-1.112.578-1.416.87-.31.296-.376.51-.376.626z" />
    </Svg>
  );
};
const UserIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserIconOutline;
