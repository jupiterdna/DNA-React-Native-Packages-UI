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
      <Path d="M18.474 6.313a2.875 2.875 0 11-5.75 0 2.875 2.875 0 015.75 0zm2.629 8.86h-4.017l-.002-2.509a2.75 2.75 0 00-2.237-2.7c.251-.02.501-.028.747-.028 1.128 0 2.408.214 3.427.594.508.19.993.435 1.366.75.368.31.716.767.716 1.367v2.526zm-5.515 4.137a1.25 1.25 0 01-1.26 1.251l-1.053-.008v-9.137h1.06c.69 0 1.25.559 1.25 1.25l.003 6.644zM11.77 10.9v9.642l-5.116-.039v-9.148l.008-1.175a1.25 1.25 0 011.25-1.248h2.61c.69 0 1.25.56 1.25 1.252l-.001.716h-.002zm-6.622.504v9.087l-1.008-.007a1.25 1.25 0 01-1.24-1.25l-.004-6.58c0-.677.54-1.232 1.217-1.25h1.035zm5.122.013l.001-.985h-2.11l-.001.985h2.11z" />
    </Svg>
  );
};
const UserGuestIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserGuestIcon;
