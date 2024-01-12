//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const FuelTypeIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M3.45 4.7a2 2 0 012-2h6.44a2 2 0 012 2v7.41h.789a2.25 2.25 0 012.25 2.262l-.023 4.31a1.073 1.073 0 102.145.005v-7.46a2.605 2.605 0 11-2-4.806l-2.14-2.141 1.06-1.06 3.693 3.692c.518.456.854 1.115.883 1.853h.004v9.922a2.573 2.573 0 11-5.145-.014l.023-4.309a.75.75 0 00-.75-.754h-.788v7.69H3.449V4.7zm8.94 0a.5.5 0 00-.5-.5H5.45a.5.5 0 00-.5.5v5.51h7.44V4.7zm5.555 5.274a1.105 1.105 0 00.8-1.866l-.003.004-.098-.098a1.105 1.105 0 10-.7 1.96zM6.092 12.989v1.5h1.867v3.918h1.5v-3.918h1.865v-1.5H6.092z" />
    </Svg>
  );
};
export default FuelTypeIcon;
