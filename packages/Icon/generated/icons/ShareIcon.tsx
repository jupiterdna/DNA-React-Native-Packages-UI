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
      <Path d="M21.488 5.926a3.414 3.414 0 01-6.1 2.107l-6.155 3.116a3.42 3.42 0 010 1.701l6.155 3.117a3.414 3.414 0 11-.645 1.355L8.55 14.185a3.414 3.414 0 110-4.37l6.194-3.137a3.414 3.414 0 116.745-.752z" />
    </Svg>
  );
};
const ShareIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ShareIcon;
