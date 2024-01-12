//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const ImageIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M3.175 5.42a2.25 2.25 0 012.25-2.25h13.15a2.25 2.25 0 012.25 2.25v13.15a2.25 2.25 0 01-2.25 2.25H5.425a2.25 2.25 0 01-2.25-2.25V5.42zm10.884 6.78l-2.86 3.778-2.048-2.64-2.903 3.828h11.504L14.059 12.2z" />
    </Svg>
  );
};
export default ImageIcon;
