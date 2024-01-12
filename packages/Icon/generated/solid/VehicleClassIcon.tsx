//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const VehicleClassIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M11.064 1H1v4.604h10.064l2.948-2.302L11.064 1zM5.25 3.802h-2v-1h2v1zM17.086 12.597H1v4.604h16.086l2.947-2.302-2.947-2.302zM5.25 15.4h-2v-1.001h2v1zM1 6.799h13.066L17.013 9.1l-2.947 2.302H1V6.799zM5.25 9.6v-1h-2v1h2zM20.052 18.396H1V23h19.052L23 20.698l-2.948-2.302zM5.25 21.198h-2v-1h2v1z" />
    </Svg>
  );
};
export default VehicleClassIcon;
