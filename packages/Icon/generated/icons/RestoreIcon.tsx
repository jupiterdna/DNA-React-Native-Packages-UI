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
      <Path d="M12.04 4.25a7.751 7.751 0 00-6.983 4.383h3.98v1.5H2.71V3.804h1.5v3.27A9.25 9.25 0 112.843 13h1.51a7.752 7.752 0 0015.436-1.001 7.75 7.75 0 00-7.75-7.75z" />
      <Path d="M12.04 13.834a1.834 1.834 0 10-.001-3.668 1.834 1.834 0 000 3.668z" />
    </Svg>
  );
};
const RestoreIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default RestoreIcon;
