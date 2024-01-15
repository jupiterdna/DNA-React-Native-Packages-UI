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
      <Path d="M5.148 6.605v9.98a2.25 2.25 0 002.25 2.25h9.971v4.124h1.5v-4.123h4.123v-1.5H7.398a.75.75 0 01-.75-.75V.982h-1.5v4.123H1.025v1.5h4.123z" />
      <Path d="M18.87 15.211V7.355a2.25 2.25 0 00-2.25-2.25H8.791v1.5h7.827a.75.75 0 01.75.75v7.856h1.5z" />
    </Svg>
  );
};
const CropIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CropIcon;
