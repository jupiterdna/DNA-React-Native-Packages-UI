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
      <Path d="M4.001 20.2V3.8h1.5v16.4h-1.5zM11.25 7.983V3.8h1.5v4.183h-1.5zM18.499 20.2V3.8h1.5v16.4h-1.5zm-7.25-6.108V9.908h1.5v4.184h-1.5zm0 6.108v-4.183h1.5V20.2h-1.5z" />
    </Svg>
  );
};
const StreetIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default StreetIconOutline;
