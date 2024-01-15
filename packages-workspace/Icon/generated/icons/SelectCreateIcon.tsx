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
      <Path d="M18.991 2.278L5.004 15.785l8.228-.011 5.765 5.948-.006-19.444zM7.616 6.39V9h1.5V6.39h2.61v-1.5h-2.61V2.277h-1.5v2.611H5.004v1.5h2.612z" />
    </Svg>
  );
};
const SelectCreateIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SelectCreateIcon;
