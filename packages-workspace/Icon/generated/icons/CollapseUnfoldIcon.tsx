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
      <Path d="M16.393 5.082L12 9.472 7.606 5.086l1.06-1.062L12 7.352l3.333-3.331 1.06 1.06zM16.393 18.918L12 14.528l-4.394 4.386 1.06 1.062L12 16.648l3.333 3.331 1.06-1.06z" />
    </Svg>
  );
};
const CollapseUnfoldIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CollapseUnfoldIcon;
