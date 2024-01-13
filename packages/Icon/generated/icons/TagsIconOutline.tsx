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
      <Path d="M19.119 7.686a1.307 1.307 0 110-2.614 1.307 1.307 0 010 2.614z" />
      <Path d="M21.751 2.019c.967 0 1.75.783 1.75 1.75v7.23a2.25 2.25 0 01-.658 1.59l-8.92 8.92a1.75 1.75 0 01-2.474 0L4.01 14.072a1.75 1.75 0 010-2.475l8.92-8.919a2.25 2.25 0 011.59-.659h7.23zm.25 1.75a.25.25 0 00-.25-.25h-7.23a.75.75 0 00-.53.22l-8.92 8.919A.246.246 0 005 12.85a.247.247 0 00.073.16l7.437 7.437a.25.25 0 00.354 0l8.92-8.919A.75.75 0 0022 11v-7.23z" />
      <Path d="M8.448 21.509a1.75 1.75 0 002.28.169l-1.644-1.655-7.013-7.011a.247.247 0 01-.072-.16.246.246 0 01.072-.194L12.718 2.019h-1.197a2.25 2.25 0 00-1.59.659l-8.92 8.92a1.75 1.75 0 000 2.474l7.437 7.437z" />
    </Svg>
  );
};
const TagsIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TagsIconOutline;
