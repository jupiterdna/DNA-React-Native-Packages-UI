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
      <Path d="M19.003 7.347a3.073 3.073 0 100-6.147 3.073 3.073 0 000 6.147z" />
      <Path d="M20.5 15.78V9.123a5.051 5.051 0 001.5-.755v7.412a2.25 2.25 0 01-2.25 2.25H5.795L2 21.824V4.43a2.25 2.25 0 012.25-2.25h10.13c-.211.466-.355.97-.416 1.5H4.25a.75.75 0 00-.75.75v13.773l1.673-1.673H19.75a.75.75 0 00.75-.75z" />
    </Svg>
  );
};
const ChatBoxUnreadIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChatBoxUnreadIconOutline;
