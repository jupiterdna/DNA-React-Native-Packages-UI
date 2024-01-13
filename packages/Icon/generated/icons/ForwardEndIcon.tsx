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
      <Path d="M3.375 18.364V5.636L9.679 12l-6.304 6.364zM19.125 18.364V5.636h1.5v12.728h-1.5zM11.352 5.636v12.728L17.655 12l-6.303-6.364z" />
    </Svg>
  );
};
const ForwardEndIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ForwardEndIcon;
