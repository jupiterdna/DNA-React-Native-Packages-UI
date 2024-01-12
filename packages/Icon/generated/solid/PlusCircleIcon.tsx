//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PlusCircleIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M2 12C2 6.477 6.478 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10C6.478 22 2 17.523 2 12zm10.75-.75V7h-1.5v4.25H7v1.5h4.25V17h1.5v-4.25H17v-1.5h-4.25z" />
    </Svg>
  );
};
export default PlusCircleIcon;
