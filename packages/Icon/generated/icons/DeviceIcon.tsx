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
      <Path d="M3.25 3.5A2.25 2.25 0 015.5 1.25h13a2.25 2.25 0 012.25 2.25v17a2.25 2.25 0 01-2.25 2.25h-13a2.25 2.25 0 01-2.25-2.25v-17zm1.5 12.979h14.5V5.883H4.75v10.596zM13 19.604a1 1 0 10-2 0 1 1 0 002 0z" />
    </Svg>
  );
};
const DeviceIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DeviceIcon;
