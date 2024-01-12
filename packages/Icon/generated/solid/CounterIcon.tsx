//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CounterIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M8.934 3a2.717 2.717 0 100 5.433 2.717 2.717 0 000-5.433zM22.5 14.002h-1.002v8h-19v-8H1.5v-1.5h21v1.5zM5.525 9.677c.87-.375 2-.617 3.202-.642l.205-.002c1.277 0 2.488.248 3.406.644.455.197.873.445 1.187.746.147.14.29.308.397.502.056.102.103.21.137.327H3.805c.097-.336.308-.614.533-.829.314-.3.732-.549 1.187-.746z" />
    </Svg>
  );
};
export default CounterIcon;
