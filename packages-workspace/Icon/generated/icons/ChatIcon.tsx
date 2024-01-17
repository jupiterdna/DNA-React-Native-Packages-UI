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
      <Path d="M4.25 2.178A2.25 2.25 0 002 4.428v17.394l3.795-3.794H19.75a2.25 2.25 0 002.25-2.25V4.428a2.25 2.25 0 00-2.25-2.25H4.25zm1.595 5.294v-1.5h12.3v1.5h-12.3zm12.3 3.375h-12.3v-1.5h12.3v1.5zm-12.3 3.374v-1.5h8.26v1.5h-8.26z" />
    </Svg>
  );
};
const ChatIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChatIcon;
