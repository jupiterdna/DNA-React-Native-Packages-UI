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
      <Path d="M9.051 16.722L4.318 12l4.733-4.722L7.963 6.19l-5.278 5.266L2.14 12l.546.543 5.278 5.265 1.088-1.086zM15.022 16.722L19.755 12l-4.733-4.722L16.11 6.19l5.278 5.266.473.543-.473.543-5.278 5.265-1.088-1.086z" />
    </Svg>
  );
};
const CodeIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CodeIcon;
