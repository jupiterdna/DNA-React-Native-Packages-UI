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
      <Path d="M17.25 10.356H6.75v-1.5h10.5v1.5zM8.25 13.357h7.5v-1.5h-7.5v1.5zM12 20.604a1 1 0 100-2 1 1 0 000 2z" />
      <Path d="M5.5 1.25A2.25 2.25 0 003.25 3.5v17a2.25 2.25 0 002.25 2.25h13a2.25 2.25 0 002.25-2.25v-17a2.249 2.249 0 00-2.25-2.25h-13zm-.652 1.88a.75.75 0 01.652-.38h13a.75.75 0 01.75.75v.883H4.75V3.5a.749.749 0 01.098-.37zM4.75 5.882h14.5v10.596H4.75V5.883zm0 14.617v-2.521h14.5V20.5a.75.75 0 01-.75.75h-13a.75.75 0 01-.75-.75z" />
    </Svg>
  );
};
const DeviceNameIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DeviceNameIconOutline;
