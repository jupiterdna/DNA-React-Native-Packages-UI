//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const FilterIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M18.707 4.254a.85.85 0 01.668 1.374l-5.625 7.177V18.9c0 .47-.38.85-.85.85h-1.8a.85.85 0 01-.85-.85v-6.095L4.624 5.628a.85.85 0 01.668-1.374h13.415z" />
    </Svg>
  );
};
export default FilterIcon;
