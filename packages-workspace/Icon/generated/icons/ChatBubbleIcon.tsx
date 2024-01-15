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
      <Path d="M3.115 10.635a8.378 8.378 0 1116.755 0c0 4.82-3.313 8.557-6.351 10.454l-1.046.653-.22-2.73h-.76a8.378 8.378 0 01-8.378-8.377z" />
    </Svg>
  );
};
const ChatBubbleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChatBubbleIcon;
