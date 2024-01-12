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
      <Path d="M10.394 3.41a1.598 1.598 0 013.195 0v.677a6.183 6.183 0 014.586 5.972v5.326l-1.5-1.5V10.06A4.68 4.68 0 009.14 6.35L8.072 5.283a6.162 6.162 0 012.322-1.195V3.41zM14.124 20.28a2.126 2.126 0 11-4.253 0h4.253z" />
      <Path d="M6.087 8.238L1.528 3.68 2.59 2.62l18.867 18.867-1.061 1.06-3.7-3.7H3.8v-1.5h2.014v-7.287c0-.634.096-1.245.273-1.82zm1.26 1.26c-.021.184-.033.371-.033.561v7.287h7.88L7.348 9.499z" />
    </Svg>
  );
};
const BellOffIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BellOffIconOutline;
