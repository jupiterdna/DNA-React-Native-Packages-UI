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
      <Path d="M6.5 5.773a4.023 4.023 0 118.045 0V15.6a2.55 2.55 0 11-5.099 0V5.707h1.5v9.894a1.05 1.05 0 102.1 0V5.773a2.523 2.523 0 00-5.046 0V16.75a4 4 0 008 0V5.707h1.5V16.75a5.5 5.5 0 11-11 0V5.773z" />
    </Svg>
  );
};
const AttachFileVerticalIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AttachFileVerticalIcon;
