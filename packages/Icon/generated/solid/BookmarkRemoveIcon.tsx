//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const BookmarkRemoveIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M18.377 11.086c.182 0 .362-.01.539-.027v9.825l-6.913-2.968-6.913 2.968V5.367a2.25 2.25 0 012.25-2.25h6.615a5.211 5.211 0 004.422 7.969z" />
      <Path d="M15.088 6.625h6.155v-1.5h-6.155v1.5z" />
    </Svg>
  );
};
export default BookmarkRemoveIcon;
