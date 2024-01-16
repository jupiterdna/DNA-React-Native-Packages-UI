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
      <Path d="M11.992 1.882c-.883 0-1.598.715-1.598 1.598v.679a6.183 6.183 0 00-4.58 5.97v7.287H3.8v1.5h16.4v-1.5h-2.025v-4.982l-1.5 1.5v3.482h-9.36v-7.287a4.68 4.68 0 017.125-3.99l.913-.913-.005-.004.17-.17a6.153 6.153 0 00-1.929-.895V3.48c0-.883-.715-1.598-1.598-1.598zM14.124 20.35a2.126 2.126 0 11-4.253 0h4.253zM20.196 4.646a1.07 1.07 0 00-1.514 0l-.576.576 2.253 2.253.576-.576a1.07 1.07 0 000-1.514l-.739-.739z" />
      <Path d="M19.862 7.99l-2.258-2.257-5.377 5.378v2.257h2.256l5.379-5.378z" />
    </Svg>
  );
};
const BellEditIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BellEditIconOutline;
