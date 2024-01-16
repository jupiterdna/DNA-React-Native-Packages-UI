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
      <Path d="M5.275 3.025a2.25 2.25 0 00-2.25 2.25v4.821l2.882 2.884 4.049-4.048 4.055 4.075 4.087-4.064 2.876 2.868V5.275a2.25 2.25 0 00-2.25-2.25H5.275z" />
      <Path d="M20.974 13.93l-2.878-2.87-4.09 4.067-4.053-4.072-4.047 4.047-2.88-2.883v6.505a2.25 2.25 0 002.25 2.25h13.448a2.25 2.25 0 002.25-2.25V13.93z" />
    </Svg>
  );
};
const ImageBrokenIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageBrokenIcon;
