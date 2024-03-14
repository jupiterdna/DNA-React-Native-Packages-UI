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
      <Path d="M3.175 5.425a2.25 2.25 0 012.25-2.25h13.15a2.25 2.25 0 012.25 2.25v4.988c-.383.12-.743.331-1.046.634l-.454.453V5.425a.75.75 0 00-.75-.75H5.425a.75.75 0 00-.75.75v13.15c0 .414.336.75.75.75h7.474v1.5H5.425a2.25 2.25 0 01-2.25-2.25V5.425z" />
      <Path d="M16.006 14.823l-2.351 2.348H6.248l2.903-3.829 2.048 2.64 2.86-3.777 1.947 2.618zM20.839 12.108a1.07 1.07 0 011.51 0l.738.736a1.066 1.066 0 010 1.509l-.575.573-2.247-2.244.574-.574zm-1.075 1.082l2.252 2.249-5.365 5.357h-2.252v-2.248l5.365-5.357z" />
    </Svg>
  );
};
const ImageEditIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageEditIconOutline;
