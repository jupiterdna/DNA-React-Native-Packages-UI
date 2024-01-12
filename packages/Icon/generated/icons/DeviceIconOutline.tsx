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
      <Path d="M12 20.604a1 1 0 100-2 1 1 0 000 2z" />
      <Path d="M5.5 1.25A2.25 2.25 0 003.25 3.5v17a2.25 2.25 0 002.25 2.25h13a2.25 2.25 0 002.25-2.25v-17a2.25 2.25 0 00-2.25-2.25h-13zM4.75 3.5a.75.75 0 01.75-.75h13a.75.75 0 01.75.75v.883H4.75V3.5zm0 2.383h14.5v10.596H4.75V5.883zm0 14.617v-2.521h14.5V20.5a.75.75 0 01-.75.75h-13a.75.75 0 01-.75-.75z" />
    </Svg>
  );
};
const DeviceIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DeviceIconOutline;
