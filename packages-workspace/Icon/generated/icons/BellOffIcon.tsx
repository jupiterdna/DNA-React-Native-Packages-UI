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
      <Path d="M11.991 1.812c-.882 0-1.597.715-1.597 1.598v.678a6.155 6.155 0 00-2.322 1.195l10.103 10.102V10.06a6.182 6.182 0 00-4.585-5.972V3.41c0-.883-.716-1.598-1.599-1.598zM6.75 6.789l12.057 12.057 2.65 2.64-1.063 1.06-3.7-3.7H3.8v-1.5h2.014v-7.287c0-.634.095-1.245.273-1.82l-4.559-4.56 1.06-1.06 4.162 4.17z" />
      <Path d="M14.124 20.28a2.127 2.127 0 01-4.253 0h4.253z" />
    </Svg>
  );
};
const BellOffIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BellOffIcon;
