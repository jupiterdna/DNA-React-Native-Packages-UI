//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CaretCircleRightIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm8 5l5-5-5-5v10z" />
    </Svg>
  );
};
export default CaretCircleRightIcon;
