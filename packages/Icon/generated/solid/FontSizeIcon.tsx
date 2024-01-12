//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const FontSizeIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M7.168 4.25h1.666l6.207 15.5h-1.616l-2.002-5H4.578l-2.002 5H.96l6.208-15.5zm-1.989 9h5.643L8.001 6.205 5.179 13.25zM21.25 19.773V19a3.75 3.75 0 110-6v-.773h1.5v7.546h-1.5zM19 13.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
    </Svg>
  );
};
export default FontSizeIcon;
