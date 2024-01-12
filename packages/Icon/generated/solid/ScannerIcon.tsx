//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ScannerIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M1.723 3.472c0-.967.783-1.75 1.75-1.75h5.764v1.5H3.473a.25.25 0 00-.25.25v5.764h-1.5V3.472zm18.806-.25h-5.764v-1.5h5.764c.967 0 1.75.783 1.75 1.75v5.764h-1.5V3.472a.25.25 0 00-.25-.25zM3.223 14.764v5.764c0 .138.112.25.25.25h5.764v1.5H3.473a1.75 1.75 0 01-1.75-1.75v-5.764h1.5zm17.556 5.764v-5.764h1.5v5.764a1.75 1.75 0 01-1.75 1.75h-5.764v-1.5h5.764a.25.25 0 00.25-.25z" />
    </Svg>
  );
};
export default ScannerIcon;
