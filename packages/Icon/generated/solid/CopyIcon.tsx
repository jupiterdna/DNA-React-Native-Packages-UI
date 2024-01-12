//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CopyIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M6.674 4.25A2.25 2.25 0 018.924 2h9.162a2.246 2.246 0 012.25 2.25v12.49a2.25 2.25 0 01-2.25 2.25H8.924a2.25 2.25 0 01-2.25-2.25V4.25z" />
      <Path d="M5.164 18.249V6.223h-1.5v12.026a3.75 3.75 0 003.75 3.75h8.939v-1.5H7.413a2.25 2.25 0 01-2.25-2.25z" />
    </Svg>
  );
};
export default CopyIcon;
