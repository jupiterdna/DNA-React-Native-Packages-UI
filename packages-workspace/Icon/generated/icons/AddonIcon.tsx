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
      <Path d="M17.256 8.06v2.977a6.026 6.026 0 00-3.978 10.553H3.218a1 1 0 01-1-1v-5.515H3.83a1.998 1.998 0 10-.009-1.5H2.22V8.06a1 1 0 011-1h4.77v-.007a2.65 2.65 0 113.5-.003v.01h4.767a1 1 0 011 1z" />
      <Path d="M17.257 21.59a4.526 4.526 0 100-9.053 4.526 4.526 0 000 9.053zm-.75-3.776h-1.426v-1.5h1.427v-1.427h1.5v1.427h1.426v1.5h-1.426v1.426h-1.5v-1.426z" />
    </Svg>
  );
};
const AddonIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AddonIcon;
