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
      <Path d="M8.924 2a2.25 2.25 0 00-2.25 2.25v12.49a2.25 2.25 0 002.25 2.25h9.162a2.25 2.25 0 002.25-2.25V4.25A2.25 2.25 0 0018.086 2H8.924zm-.75 2.25a.75.75 0 01.75-.75h9.162a.75.75 0 01.75.75v12.49a.75.75 0 01-.75.75H8.924a.75.75 0 01-.75-.75V4.25z" />
      <Path d="M5.164 18.25V6.222h-1.5v12.026A3.75 3.75 0 007.414 22h8.939v-1.5H7.414a2.25 2.25 0 01-2.25-2.25z" />
    </Svg>
  );
};
const CopyIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CopyIconOutline;
