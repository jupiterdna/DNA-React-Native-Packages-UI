//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ChevronDownIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M21.64 7.975l-1.06-1.06-8.58 8.58-8.58-8.58-1.06 1.06 9.64 9.64 9.64-9.64z" />
    </Svg>
  );
};
export default ChevronDownIcon;
