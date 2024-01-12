//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CheckDoneAllIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M10.607 14.472l8.105-8.105-1.06-1.06-8.105 8.105 1.06 1.06zM7.447 17.633l-5.279-5.282-1.06 1.06 5.278 5.282 1.06-1.06z" />
      <Path d="M10.566 18.693L22.892 6.367l-1.061-1.06-11.265 11.265-4.399-4.398-1.06 1.06 5.458 5.46z" />
    </Svg>
  );
};
export default CheckDoneAllIcon;
