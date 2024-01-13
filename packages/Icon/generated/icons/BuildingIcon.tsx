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
      <Path d="M4.334 2h15.332v20h-5.934v-4.75h-3.465V22H4.334V2zm4.143 4.107v2.385h2.384V6.107H8.477zm7.044 0h-2.384v2.385h2.384V6.107zm-7.044 4.686v2.384h2.384v-2.384H8.477zm7.044 0h-2.384v2.384h2.384v-2.384z" />
    </Svg>
  );
};
const BuildingIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BuildingIcon;
