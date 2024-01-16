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
      <Path d="M14.059 12.205l3.693 4.966H6.248l2.903-3.829 2.048 2.64 2.86-3.777z" />
      <Path d="M5.425 3.175a2.25 2.25 0 00-2.25 2.25v13.15a2.25 2.25 0 002.25 2.25h13.15a2.25 2.25 0 002.25-2.25V5.425a2.25 2.25 0 00-2.25-2.25H5.425zm-.75 2.25a.75.75 0 01.75-.75h13.15a.75.75 0 01.75.75v13.15a.75.75 0 01-.75.75H5.425a.75.75 0 01-.75-.75V5.425z" />
    </Svg>
  );
};
const ImageIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageIconOutline;
