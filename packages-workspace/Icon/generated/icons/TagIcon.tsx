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
      <Path d="M22.001 3.769a1.75 1.75 0 00-1.75-1.75h-7.23c-.596 0-1.169.237-1.59.659l-8.92 8.92a1.75 1.75 0 000 2.474l7.437 7.437a1.75 1.75 0 002.475 0l8.92-8.92A2.25 2.25 0 0022 11v-7.23zm-5.69 2.61a1.307 1.307 0 112.615.001 1.307 1.307 0 01-2.614 0z" />
    </Svg>
  );
};
const TagIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TagIcon;
