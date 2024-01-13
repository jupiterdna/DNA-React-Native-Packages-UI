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
      <Path d="M8.908 7.354a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      <Path d="M3.795 2.922a.75.75 0 00-.75.75v7.364c0 .414.336.75.75.75h16.41a.75.75 0 00.75-.75V3.672a.75.75 0 00-.75-.75H3.795zm.75 7.364V4.422h14.91v5.864H4.545zM7.408 16.096a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
      <Path d="M3.795 22.028a.75.75 0 01-.75-.75v-7.364a.75.75 0 01.75-.75h16.41a.75.75 0 01.75.75v7.364a.75.75 0 01-.75.75H3.795zm.75-7.364v5.864h14.91v-5.864H4.545z" />
    </Svg>
  );
};
const DnsIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DnsIconOutline;
