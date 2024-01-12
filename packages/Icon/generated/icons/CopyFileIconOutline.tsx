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
      <Path d="M8.924 2a2.25 2.25 0 00-2.25 2.25v12.49a2.25 2.25 0 002.25 2.25h9.162a2.25 2.25 0 002.25-2.25V7.193L15.486 2H8.923zm-.75 2.25a.75.75 0 01.75-.75h4.907v5.346h5.005v7.895a.75.75 0 01-.75.75H8.924a.75.75 0 01-.75-.75V4.25zm10.253 3.096h-3.096V4.032l3.096 3.314z" />
      <Path d="M5.164 18.25V6.222h-1.5v12.026A3.75 3.75 0 007.414 22h8.939v-1.5H7.414a2.25 2.25 0 01-2.25-2.25z" />
    </Svg>
  );
};
const CopyFileIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CopyFileIconOutline;
