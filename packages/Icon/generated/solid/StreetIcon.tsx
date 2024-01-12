//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const StreetIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12.75 3.8h7.249v16.4h-7.25v-4.183h-1.5V20.2H4.001V3.8h7.249v4.183h1.5V3.8zm-1.501 6.108v4.184h1.5V9.908h-1.5z" />
    </Svg>
  );
};
export default StreetIcon;
