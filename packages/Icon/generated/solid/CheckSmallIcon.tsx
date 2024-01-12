//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CheckSmallIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M19.968 7.315l-1.06-1.061-9.373 9.372-4.445-4.43-1.059 1.063 5.506 5.487L19.968 7.315z" />
    </Svg>
  );
};
export default CheckSmallIcon;
