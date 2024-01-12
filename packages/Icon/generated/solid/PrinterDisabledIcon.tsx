//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PrinterDisabledIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M17.93 19.148l2.754 2.753 1.06-1.061-3.813-3.794L6.06 5.176 3.004 2.1l-1.06 1.06L6.06 7.277v.494H4.737a2.75 2.75 0 00-2.75 2.75v6.212h4.124v3.792h11.82v-1.377zm-1.5-1.5v1.377H7.612V15.27h6.44l2.38 2.379zM22.056 16.733h-1.61l-8.963-8.962h7.823a2.75 2.75 0 012.75 2.75v6.212zm-4.73-4.16c.312 0 .597-.113.817-.3a1.265 1.265 0 10-.816.3zM17.982 6.27H9.983l-3.85-3.85h11.85v3.85z" />
    </Svg>
  );
};
export default PrinterDisabledIcon;
