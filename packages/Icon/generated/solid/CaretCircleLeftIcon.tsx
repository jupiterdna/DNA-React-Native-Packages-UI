//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CaretCircleLeftIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0zm-8-5l-5 5 5 5V7z" />
    </Svg>
  );
};
export default CaretCircleLeftIcon;
