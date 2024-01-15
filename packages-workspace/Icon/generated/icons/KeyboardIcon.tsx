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
      <Path d="M4.063 5a2.25 2.25 0 00-2.25 2.25v9.5A2.25 2.25 0 004.063 19H19.94a2.25 2.25 0 002.25-2.25v-9.5A2.25 2.25 0 0019.94 5H4.062zm2.4 4.766h-1.75v-1.75h1.75v1.75zm0 3.108h-1.75v-1.75h1.75v1.75zM9.67 9.766H7.92v-1.75h1.75v1.75zm0 3.108H7.92v-1.75h1.75v1.75zm3.205-3.108h-1.75v-1.75h1.75v1.75zm0 3.108h-1.75v-1.75h1.75v1.75zm3.2 3.11h-8.15v-1.75h8.15v1.75zm.007-6.218h-1.75v-1.75h1.75v1.75zm0 3.108h-1.75v-1.75h1.75v1.75zm3.211-3.108h-1.75v-1.75h1.75v1.75zm0 3.108h-1.75v-1.75h1.75v1.75z" />
    </Svg>
  );
};
const KeyboardIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default KeyboardIcon;
