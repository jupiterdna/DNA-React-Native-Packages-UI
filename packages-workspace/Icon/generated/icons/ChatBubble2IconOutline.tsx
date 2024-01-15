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
      <Path d="M7.965 16.755l.809.256c.99.314 2.079.489 3.226.489 5.024 0 8.5-3.205 8.5-6.5S17.024 4.5 12 4.5 3.5 7.705 3.5 11c0 1.633.804 3.191 2.259 4.398l.728.605-.232.918a9.17 9.17 0 01-.603 1.678c.534-.323 1.063-.743 1.677-1.283l.636-.561zm-3.709 4.013C3.598 20.92 2.86 21 2 21c.45-.45.955-.971 1.423-1.599A8.005 8.005 0 004.8 16.553C3.067 15.114 2 13.157 2 11c0-4.418 4.477-8 10-8s10 3.582 10 8-4.477 8-10 8c-1.3 0-2.54-.198-3.68-.559-1.279 1.128-2.423 1.949-4.064 2.327z" />
    </Svg>
  );
};
const ChatBubble2IconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChatBubble2IconOutline;
