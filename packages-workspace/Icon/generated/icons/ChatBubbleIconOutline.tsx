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
      <Path d="M11.499 3.758a6.878 6.878 0 100 13.755h2.143l.128 1.58c2.417-1.86 4.606-4.859 4.606-8.458A6.878 6.878 0 0011.5 3.758zM3.12 10.635a8.378 8.378 0 1116.755 0c0 4.82-3.314 8.557-6.352 10.454l-1.045.653-.22-2.73h-.76a8.378 8.378 0 01-8.378-8.377z" />
    </Svg>
  );
};
const ChatBubbleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChatBubbleIconOutline;
