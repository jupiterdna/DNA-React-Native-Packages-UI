//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CloseIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M13.06 12L20 5.06 18.94 4 12 10.94 5.06 4 4 5.062l6.94 6.94L4 18.94 5.06 20 12 13.062l6.94 6.94L20 18.94 13.06 12z" />
    </Svg>
  );
};
export default CloseIcon;
