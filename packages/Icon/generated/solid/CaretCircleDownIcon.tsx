//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CaretCircleDownIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12 2a10 10 0 110 20 10 10 0 010-20zm-5 8l5 5 5-5H7z" />
    </Svg>
  );
};
export default CaretCircleDownIcon;
