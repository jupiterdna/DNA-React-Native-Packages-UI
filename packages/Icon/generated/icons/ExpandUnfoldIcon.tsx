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
      <Path d="M16.393 7.55L12 3.16 7.606 7.545l1.06 1.062L12 5.28l3.333 3.33 1.06-1.06zM16.393 16.45L12 20.84l-4.394-4.386 1.06-1.061L12 18.72l3.333-3.33 1.06 1.06z" />
    </Svg>
  );
};
const ExpandUnfoldIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ExpandUnfoldIcon;
