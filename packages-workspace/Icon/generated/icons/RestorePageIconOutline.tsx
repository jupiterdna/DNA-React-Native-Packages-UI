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
      <Path d="M7.102 7.859h1.5v1.66a4.887 4.887 0 11-1.346 4.548H8.81a3.389 3.389 0 006.605-1.063 3.388 3.388 0 00-5.966-2.197h2.09v1.5H7.101V7.86z" />
      <Path d="M6.25 2A2.25 2.25 0 004 4.25v15.5A2.25 2.25 0 006.25 22h11.5A2.25 2.25 0 0020 19.75V8.098L13.91 2H6.25zM5.5 4.25a.75.75 0 01.75-.75h7.039L18.5 8.72v11.03a.75.75 0 01-.75.75H6.25a.75.75 0 01-.75-.75V4.25z" />
    </Svg>
  );
};
const RestorePageIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default RestorePageIconOutline;
