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
      <Path d="M13.248 3.245l7.497.007.003 7.5-1.5.002-.002-4.942L5.813 19.25l4.94.005v1.5l-7.498-.007-.003-7.5 1.5-.001.002 4.941L18.187 4.75l-4.94-.005v-1.5z" />
    </Svg>
  );
};
const ExpandFullIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ExpandFullIcon;
