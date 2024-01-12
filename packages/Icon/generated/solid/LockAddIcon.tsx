//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const LockAddIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M12.004 1.16A4.871 4.871 0 007.133 6.03v2.384H6.33a2.25 2.25 0 00-2.25 2.25v9.35a2.25 2.25 0 002.25 2.25h11.35a2.25 2.25 0 002.25-2.25v-9.35a2.25 2.25 0 00-2.25-2.25h-.804V6.03c0-2.69-2.18-4.871-4.872-4.871zm3.372 7.255H8.633V6.03a3.372 3.372 0 016.743 0v2.384zm-2.621 6.175h3.015v1.5h-3.015v3.016h-1.5V16.09H8.238v-1.5h3.017v-3.017h1.5v3.017z" />
    </Svg>
  );
};
export default LockAddIcon;
