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
      <Path d="M4.117 18.821L18.82 4.118l1.061 1.06L5.178 19.883l-1.06-1.06zM4.252 7.503a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm3.25-1.75a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM16.496 13.25a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm-1.75 3.25a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z" />
    </Svg>
  );
};
const PercentIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default PercentIcon;
