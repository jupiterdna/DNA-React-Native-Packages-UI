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
      <Path d="M22 12c0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10S6.478 2 12 2c5.523 0 10 4.477 10 10zm-10.75.966h1.5v-5.97h-1.5v5.97zm-.125 3.088a.875.875 0 101.75 0 .875.875 0 00-1.75 0z" />
    </Svg>
  );
};
const ErrorCircleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ErrorCircleIcon;
