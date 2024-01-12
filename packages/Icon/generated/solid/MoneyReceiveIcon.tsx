//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const MoneyReceiveIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M21.168 7.6a6.435 6.435 0 01-3.524 5.741 3.746 3.746 0 00-1.3-.837l-6.76-2.58H8.73A6.436 6.436 0 1121.168 7.6zm-8.102-3.15a.75.75 0 00-.75.75v2.4c0 .415.335.75.75.75h2.583v.9h-3.417v1.5h1.75v.85h1.5v-.85h.917a.75.75 0 00.75-.75V7.6a.75.75 0 00-.75-.75h-2.583v-.9h3.416v-1.5h-1.75V3.6h-1.5v.85h-.916zM1.295 11.424H5.5v10.953H1.295V11.424zM6.981 20.727l7.379 2.107 8.041-2.576v-.717c0-.782-.151-1.193-.536-1.442-.439-.285-.942-.43-1.864-.43h-5.758c-1.027 0-2.365-.408-3.378-.776-.084-.03-.266-.102-.418-.16l-.202-.08.404-1.29c.042.015.106.04.179.07.171.066.392.153.498.191 1.014.368 2.152.696 2.917.696h3.013v-.313a2.25 2.25 0 00-1.448-2.102l-6.502-2.481H6.981v9.303z" />
    </Svg>
  );
};
export default MoneyReceiveIcon;
