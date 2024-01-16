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
      <Path d="M19.003 7.347a3.074 3.074 0 100-6.147 3.074 3.074 0 000 6.147z" />
      <Path d="M22 8.368a5.05 5.05 0 01-2.997.98 5.064 5.064 0 01-3.937-1.874H5.845v-1.5h8.377a5.064 5.064 0 01-.292-1.7c0-.747.161-1.456.45-2.094H4.25A2.25 2.25 0 002 4.43v17.394l3.795-3.794H19.75A2.25 2.25 0 0022 15.78V8.368zm-16.155 2.48v-1.5h12.3v1.5h-12.3zm8.26 3.375h-8.26v-1.5h8.26v1.5z" />
    </Svg>
  );
};
const ChatUnreadIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ChatUnreadIcon;
