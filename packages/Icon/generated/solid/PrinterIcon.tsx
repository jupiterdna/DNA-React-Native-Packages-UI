//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PrinterIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M6.04 6.819h11.92V2.948H6.04v3.87zM19.626 8.319H4.374a2.75 2.75 0 00-2.408 2.729v6.212H6.09v3.792h11.82V17.26h4.124v-6.212a2.75 2.75 0 00-2.408-2.73zm-3.217 11.233H7.59v-3.756h8.82v3.756zm.896-6.453a1.263 1.263 0 01-1.266-1.265 1.265 1.265 0 111.266 1.265z" />
    </Svg>
  );
};
export default PrinterIcon;
