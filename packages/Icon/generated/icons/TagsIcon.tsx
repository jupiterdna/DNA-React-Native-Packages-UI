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
      <Path d="M21.75 2.019c.966 0 1.75.783 1.75 1.75v7.23a2.25 2.25 0 01-.659 1.59l-8.92 8.92a1.75 1.75 0 01-2.474 0l-7.438-7.437a1.75 1.75 0 010-2.475l8.92-8.919a2.249 2.249 0 011.59-.659h7.23zm-2.633 5.667a1.307 1.307 0 10-.001-2.614 1.307 1.307 0 000 2.614z" />
      <Path d="M8.45 21.509a1.75 1.75 0 002.28.169l-1.644-1.655-7.013-7.011a.247.247 0 01-.072-.16.246.246 0 01.072-.194L12.72 2.019h-1.197a2.25 2.25 0 00-1.59.659l-8.92 8.92a1.75 1.75 0 000 2.474l7.437 7.437z" />
    </Svg>
  );
};
const TagsIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default TagsIcon;
