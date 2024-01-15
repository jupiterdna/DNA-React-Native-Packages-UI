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
      <Path d="M10.99 6.315a1.005 1.005 0 012.01 0v.496a4.163 4.163 0 013.158 4.04v3.837h1v1.5H6.842v-1.5h.993v-3.837a4.163 4.163 0 013.155-4.04v-.496zm3.668 4.536a2.662 2.662 0 10-5.323 0v3.837h5.323v-3.837zM11.998 18.702c.86 0 1.558-.697 1.558-1.558H10.44c0 .86.697 1.558 1.558 1.558z" />
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" />
    </Svg>
  );
};
const BellCircleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BellCircleIconOutline;
