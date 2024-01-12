//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CopyFileIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M6.674 4.25A2.25 2.25 0 018.924 2h6.561l4.851 5.192v9.549a2.25 2.25 0 01-2.25 2.25H8.924a2.25 2.25 0 01-2.25-2.25V4.25zm8.657-.218v3.314h3.096l-3.096-3.314z" />
      <Path d="M5.164 18.25V6.222h-1.5v12.026A3.75 3.75 0 007.414 22h8.939v-1.5H7.414a2.25 2.25 0 01-2.25-2.25z" />
    </Svg>
  );
};
export default CopyFileIcon;
