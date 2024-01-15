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
      <Path d="M5.845 7.472h12.3v-1.5h-12.3v1.5zM18.145 10.847h-12.3v-1.5h12.3v1.5zM5.845 14.221h8.26v-1.5h-8.26v1.5z" />
      <Path d="M4.25 2.178A2.25 2.25 0 002 4.428v17.394l3.795-3.794H19.75a2.25 2.25 0 002.25-2.25V4.428a2.25 2.25 0 00-2.25-2.25H4.25zm-.75 2.25a.75.75 0 01.75-.75h15.5a.75.75 0 01.75.75v11.35a.75.75 0 01-.75.75H5.173L3.5 18.2V4.428z" />
    </Svg>
  );
};
const ChatIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChatIconOutline;
