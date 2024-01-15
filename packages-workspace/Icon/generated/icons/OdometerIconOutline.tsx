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
      <Path d="M11.627 14.003a1.654 1.654 0 001.653-1.723l1.921-1.078-.734-1.308-1.921 1.079a1.654 1.654 0 10-.919 3.03zM7.343 12.75H4.928v-1.5h2.415v1.5zM16.654 12.75h2.416v-1.5h-2.416v1.5zM15.824 9.238l1.708-1.708-1.06-1.06-1.708 1.707 1.06 1.061zM8.177 9.239L6.469 7.53l1.06-1.061 1.708 1.708-1.06 1.06zM11.25 4.929v2.415h1.5V4.93h-1.5z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" />
    </Svg>
  );
};
const OdometerIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default OdometerIconOutline;
