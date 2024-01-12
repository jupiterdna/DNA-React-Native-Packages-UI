//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const MoonIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M20.493 12.467a6.504 6.504 0 01-8.914-8.962 8.5 8.5 0 108.914 8.962z" />
    </Svg>
  );
};
export default MoonIcon;
