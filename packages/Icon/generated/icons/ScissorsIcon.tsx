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
      <Path d="M8.126 9.22A3.67 3.67 0 119.23 8.177L21.46 20.465v.742l-1.62-.195-7.728-7.78-2.776 2.753a3.67 3.67 0 11-1.095-1.131l2.722-2.78L8.126 9.22zm.099-3.134c0-1.14-.901-2.065-2.013-2.065-1.11 0-2.012.925-2.012 2.065 0 1.141.901 2.066 2.012 2.066 1.112 0 2.013-.925 2.013-2.066zM6.212 19.98c1.112 0 2.013-.925 2.013-2.065 0-1.141-.901-2.066-2.013-2.066-1.11 0-2.012.925-2.012 2.066 0 1.14.901 2.065 2.012 2.065zm6.209-7.914c0-.243-.2-.439-.446-.439a.442.442 0 00-.445.439c0 .242.2.438.445.438a.442.442 0 00.446-.438z" />
      <Path d="M19.264 3.643l-6.239 6.333 1.078 1.07 6.786-6.861v-.74l-1.625.198z" />
    </Svg>
  );
};
const ScissorsIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ScissorsIcon;
