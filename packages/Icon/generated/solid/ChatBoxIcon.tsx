//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ChatBoxIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2 4.428a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 4.428v11.35a2.25 2.25 0 01-2.25 2.25H5.795L2 21.822V4.428z" />
    </Svg>
  );
};
export default ChatBoxIcon;
