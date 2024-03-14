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
      <Path d="M18.438 3.984h.005v-1.5h-5v1.5h2.598l-3.351 3.35a4.5 4.5 0 10-3.383 8.087v3.345h-1.75v1.5h1.75v1.25h1.5v-1.25h1.75v-1.5h-1.75v-3.344a4.501 4.501 0 002.936-7.02l3.194-3.193v2.275h1.5v-3.5z" />
    </Svg>
  );
};
const GenderIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default GenderIcon;
