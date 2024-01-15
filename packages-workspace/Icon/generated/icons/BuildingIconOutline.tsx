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
      <Path d="M8.477 6.107h2.384v2.385H8.477V6.107zM15.521 6.107h-2.384v2.385h2.384V6.107zM8.477 10.793h2.384v2.385H8.477v-2.385zM15.521 10.793h-2.384v2.385h2.384v-2.385z" />
      <Path d="M4.334 2h15.332v20h-5.934v-4.75h-3.464V22H4.334V2zm1.5 1.5v17h2.934v-4.75h6.464v4.75h2.934v-17H5.834z" />
    </Svg>
  );
};
const BuildingIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BuildingIconOutline;
