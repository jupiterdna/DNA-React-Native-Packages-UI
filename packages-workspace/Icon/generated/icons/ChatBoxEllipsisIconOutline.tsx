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
      <Path d="M7.898 11.15a1.027 1.027 0 100-2.053 1.027 1.027 0 000 2.053zM13.026 10.124a1.022 1.022 0 01-.555.912 1.029 1.029 0 01-1.497-.912 1.027 1.027 0 012.052 0zM16.102 11.15a1.027 1.027 0 10-.001-2.053 1.027 1.027 0 000 2.053z" />
      <Path d="M4.25 2.178A2.25 2.25 0 002 4.428v17.394l3.795-3.794H19.75a2.25 2.25 0 002.25-2.25V4.428a2.25 2.25 0 00-2.25-2.25H4.25zm-.688 1.95a.75.75 0 01.688-.451h15.5a.749.749 0 01.75.75v11.35a.75.75 0 01-.75.75H5.173L3.5 18.202V4.428c0-.106.021-.208.062-.3z" />
    </Svg>
  );
};
const ChatBoxEllipsisIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChatBoxEllipsisIconOutline;
