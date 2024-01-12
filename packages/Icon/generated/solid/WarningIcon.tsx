//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const WarningIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12 2.53l11 18.94H1L12 2.53zm-.712 8.005v4.91h1.498v-4.91h-1.498zm.75 6.026a.875.875 0 100 1.749.875.875 0 000-1.75z" />
    </Svg>
  );
};
export default WarningIcon;
