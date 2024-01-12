//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CheckIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M23 5.258L8.456 19.803.999 12.372l1.059-1.063 6.396 6.374L21.94 4.197 23 5.257z" />
    </Svg>
  );
};
export default CheckIcon;
