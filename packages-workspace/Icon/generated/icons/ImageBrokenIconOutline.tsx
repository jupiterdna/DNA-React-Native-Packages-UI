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
      <Path d="M5.275 3.025a2.25 2.25 0 00-2.25 2.25v13.45a2.25 2.25 0 002.25 2.25h13.45a2.25 2.25 0 002.25-2.25V5.274a2.25 2.25 0 00-2.25-2.25H5.274zm-.75 2.25a.75.75 0 01.75-.75h13.45a.75.75 0 01.75.75v5.051l-1.389-1.38-4.085 4.063-4.056-4.075-4.048 4.048-1.372-1.377v-6.33zm0 8.456l1.37 1.374 4.047-4.047 4.053 4.072 4.091-4.068 1.388 1.379v6.283a.75.75 0 01-.75.75H5.275a.75.75 0 01-.75-.75v-4.993z" />
    </Svg>
  );
};
const ImageBrokenIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ImageBrokenIconOutline;
