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
      <Path d="M21 5.75H3v-1.5h18v1.5zM13.81 18.25h2.69a2.75 2.75 0 100-5.5H3v-1.5h13.5a4.25 4.25 0 010 8.5h-2.689l1.737 1.737-1.06 1.06L10.94 19l3.547-3.548 1.06 1.06-1.737 1.738zM3 19.75h6v-1.5H3v1.5z" />
    </Svg>
  );
};
const TextWrapIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TextWrapIconOutline;
