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
      <Path d="M3.045 3.672a.75.75 0 01.75-.75h16.41a.75.75 0 01.75.75v7.364a.75.75 0 01-.75.75H3.795a.75.75 0 01-.75-.75V3.672zm5.863 3.682a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM3.045 21.278c0 .414.336.75.75.75h16.41a.75.75 0 00.75-.75v-7.364a.75.75 0 00-.75-.75H3.795a.75.75 0 00-.75.75v7.364zm5.863-3.682a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </Svg>
  );
};
const DnsIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DnsIcon;
