//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ChatBoxUnreadIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M19.003 7.347a3.074 3.074 0 100-6.148 3.074 3.074 0 000 6.148z" />
      <Path d="M19.003 9.347A5.051 5.051 0 0022 8.367v7.413a2.25 2.25 0 01-2.25 2.25H5.795L2 21.824V4.43a2.25 2.25 0 012.25-2.25h10.13a5.073 5.073 0 004.622 7.167z" />
    </Svg>
  );
};
export default ChatBoxUnreadIcon;
