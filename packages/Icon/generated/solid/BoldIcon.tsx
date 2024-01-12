//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const BoldIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M6.25 4.25h6.25a4.25 4.25 0 012.836 7.416A4.25 4.25 0 0113.5 19.75H6.25V4.25zm1.5 8.5v5.5h5.75a2.75 2.75 0 100-5.5H7.75zm0-1.5h4.75a2.75 2.75 0 100-5.5H7.75v5.5z" />
    </Svg>
  );
};
export default BoldIcon;
