//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const DragHandleIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M3.783 10.424h16.413v-1.5H3.783v1.5zM3.783 15.069h16.413v-1.5H3.783v1.5z" />
    </Svg>
  );
};
export default DragHandleIcon;
