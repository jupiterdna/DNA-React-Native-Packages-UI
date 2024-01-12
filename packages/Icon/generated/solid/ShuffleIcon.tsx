//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ShuffleIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M18.034 5.25V2L22 6l-3.966 4V6.75h-3.16a.75.75 0 00-.649.372L11.377 12l2.848 4.878a.75.75 0 00.649.372h3.16V14L22 18l-3.966 4v-3.25h-3.16a2.252 2.252 0 01-1.946-1.116l-2.42-4.146-2.42 4.146a2.253 2.253 0 01-1.946 1.116H2v-1.5h4.142a.75.75 0 00.649-.372L9.639 12 6.79 7.122a.75.75 0 00-.649-.372H2v-1.5h4.142c.801 0 1.542.425 1.946 1.116l2.42 4.146 2.42-4.146a2.252 2.252 0 011.945-1.116h3.161z" />
    </Svg>
  );
};
export default ShuffleIcon;
