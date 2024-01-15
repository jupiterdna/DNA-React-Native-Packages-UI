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
      <Path d="M3.252 5.75h17.5v-1.5h-17.5v1.5zM3.252 15.75h17.5v-1.5h-17.5v1.5zM16.773 10.75H3.252v-1.5h13.521v1.5zM3.252 20.75h13.521v-1.5H3.252v1.5z" />
    </Svg>
  );
};
const AlignLeftIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AlignLeftIcon;
