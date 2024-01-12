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
      <Path d="M3.248 4.25h17.5v1.5h-17.5v-1.5zm3.979 5h13.521v1.5H7.227v-1.5zm-3.979 5h17.5v1.5h-17.5v-1.5zm3.979 5h13.521v1.5H7.227v-1.5z" />
    </Svg>
  );
};
const AlignRightIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AlignRightIcon;