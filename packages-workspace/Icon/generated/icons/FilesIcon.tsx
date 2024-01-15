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
      <Path d="M8.924 5.01a2.25 2.25 0 00-2.25 2.25v12.49A2.25 2.25 0 008.924 22h9.162a2.25 2.25 0 002.25-2.25v-9.547l-4.85-5.193H8.923zm9.503 5.347h-3.096V7.043l3.096 3.314z" />
      <Path d="M5.164 5.751v12.027h-1.5V5.75a3.75 3.75 0 013.75-3.75h8.939v1.5H7.414a2.25 2.25 0 00-2.25 2.25z" />
    </Svg>
  );
};
const FilesIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default FilesIcon;
