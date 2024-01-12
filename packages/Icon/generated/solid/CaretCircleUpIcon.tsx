//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CaretCircleUpIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12 22a10 10 0 110-20.002A10 10 0 0112 22zm5-8l-5-5-5 5h10z" />
    </Svg>
  );
};
export default CaretCircleUpIcon;
