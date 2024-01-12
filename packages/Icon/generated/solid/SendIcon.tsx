//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const SendIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={27}
      height={27}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M23.073 3.173l-19.9 7.208 5.31 5.31 8.256-6.185-6.184 8.256 5.31 5.31 7.208-19.9z" />
    </Svg>
  );
};
export default SendIcon;
