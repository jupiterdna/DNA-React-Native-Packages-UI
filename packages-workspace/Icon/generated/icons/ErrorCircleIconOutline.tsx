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
      <Path d="M11.25 12.966v-5.97h1.5v5.97h-1.5z" />
      <Path d="M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
      <Path d="M11.125 16.054a.875.875 0 111.75 0 .875.875 0 01-1.75 0z" />
    </Svg>
  );
};
const ErrorCircleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ErrorCircleIconOutline;
