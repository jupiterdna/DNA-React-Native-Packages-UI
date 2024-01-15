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
      <Path d="M5.26 3.33a2.25 2.25 0 00-2.25 2.25v13.34a2.25 2.25 0 002.25 2.25H12v-1.5H5.26a.75.75 0 01-.75-.75V5.58a.75.75 0 01.75-.75H12v-1.5H5.26z" />
      <Path d="M17.991 13l-3.006 2.983 1.056 1.065 4.836-4.798-4.836-4.798-1.056 1.065L17.99 11.5H9.197V13h8.794z" />
    </Svg>
  );
};
const LogOutIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LogOutIcon;
