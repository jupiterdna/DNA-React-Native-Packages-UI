//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const MenuHamburgerIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M3 6.146h18v1.5H3v-1.5zM3 11.252h18v1.5H3v-1.5zM21 16.355H3v1.5h18v-1.5z" />
    </Svg>
  );
};
export default MenuHamburgerIcon;
