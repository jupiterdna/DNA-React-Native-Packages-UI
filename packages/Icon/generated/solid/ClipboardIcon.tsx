//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ClipboardIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M14.842 3.119h3.908c1.242 0 2.25 1.018 2.25 2.274V18.72c0 1.256-1.008 2.274-2.25 2.274H5.25C4.008 20.994 3 19.976 3 18.72V5.393c0-1.256 1.008-2.274 2.25-2.274h3.91C9.383 1.719 10.622.73 12.001.73c1.379 0 2.618.989 2.84 2.389zM12 2.2a.756.756 0 00-.667 1.1.74.74 0 00.667.416c.45 0 .751-.38.751-.758s-.3-.758-.751-.758zm5 4.964H7v1.5h10v-1.5zm0 4.106H7v1.5h10v-1.5zm-3 5.605v-1.5H7v1.5h7z" />
    </Svg>
  );
};
export default ClipboardIcon;
