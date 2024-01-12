//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const BookmarkAddedIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M18.034 8.466l4.585-4.586-1.06-1.06-3.525 3.524-1.416-1.416-1.061 1.06 2.477 2.478z" />
      <Path d="M18.393 10.854c.176 0 .35-.01.523-.026v10.048l-6.913-2.968-6.913 2.968V5.36a2.25 2.25 0 012.25-2.25h6.498a5.211 5.211 0 004.555 7.744z" />
    </Svg>
  );
};
export default BookmarkAddedIcon;
