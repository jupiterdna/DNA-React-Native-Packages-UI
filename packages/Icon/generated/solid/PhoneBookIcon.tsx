//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PhoneBookIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M5 3.25A1.75 1.75 0 003.25 5v2.25h-1.5a.75.75 0 100 1.5h1.5v2.5h-1.5a.746.746 0 00-.666.405.75.75 0 00.666 1.095h1.5v2.5h-1.5a.75.75 0 000 1.5h1.5V19A1.75 1.75 0 005 20.75h14A1.75 1.75 0 0020.75 19V5A1.75 1.75 0 0019 3.25H5zM15 17a8 8 0 01-8-8V7h4v4.5l-1.152.576a6.031 6.031 0 002.076 2.076L12.5 13H17v4h-2z" />
    </Svg>
  );
};
export default PhoneBookIcon;
