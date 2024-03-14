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
      <Path d="M2 4.428a2.25 2.25 0 012.25-2.25h15.5A2.25 2.25 0 0122 4.428v11.35a2.25 2.25 0 01-2.25 2.25H5.795L2 21.822V4.428zm5.898 6.722a1.026 1.026 0 100-2.052 1.026 1.026 0 000 2.052zm5.128-1.026a1.026 1.026 0 10-2.052 0 1.026 1.026 0 002.052 0zm3.076 1.026a1.026 1.026 0 100-2.052 1.026 1.026 0 000 2.052z" />
    </Svg>
  );
};
const ChatBoxEllipsisIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChatBoxEllipsisIcon;
