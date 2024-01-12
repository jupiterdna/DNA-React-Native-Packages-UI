//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const BookmarkIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M5.087 5.367a2.25 2.25 0 012.25-2.25h9.326a2.25 2.25 0 012.25 2.25v15.517L12 17.916l-6.913 2.968V5.367z" />
    </Svg>
  );
};
export default BookmarkIcon;
