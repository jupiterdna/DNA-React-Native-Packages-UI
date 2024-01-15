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
      <Path d="M9.18 2.851h5.64v-1.5H9.18v1.5zM11.25 14.423V8.686h1.5v5.737h-1.5z" />
      <Path d="M12 4.776a8.825 8.825 0 106.706 3.09l1.514-1.514-1.06-1.061-1.522 1.521A8.79 8.79 0 0012 4.776zm-7.325 8.825a7.325 7.325 0 1114.65 0 7.325 7.325 0 01-14.65 0z" />
    </Svg>
  );
};
const ClockTimerIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ClockTimerIconOutline;
