//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const StorageIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M21 4H3v4h18V4zM7 5v2H5V5h2zM21 10H3v4h18v-4zM7 11v2H5v-2h2zM3 16h18v4H3v-4zm2 1v2h2v-2H5z" />
    </Svg>
  );
};
export default StorageIcon;
