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
      <Path d="M10.347 1.428l-1.06 1.06 2.123 2.125a9 9 0 102.981 17.098l-1.048-1.178a7.5 7.5 0 11-2.014-14.42L9.286 8.154l1.06 1.06 3.894-3.893-3.893-3.894z" />
      <Path d="M10.873 13.553l5.792-5.792 5.791 5.792-5.791 5.791-5.792-5.791zm5.792 3.67l3.67-3.67-3.67-3.67-3.67 3.67 3.67 3.67z" />
    </Svg>
  );
};
const RotateClockwiseIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default RotateClockwiseIcon;
