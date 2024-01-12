//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const VideoIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M3.73 4.066a1.854 1.854 0 00-1.858 1.852v12.164c0 1.022.832 1.851 1.857 1.851h12.204a1.854 1.854 0 001.857-1.851v-5.007l4.338 4.44V6.573l-4.338 4.314v-4.97a1.854 1.854 0 00-1.857-1.85H3.729z" />
    </Svg>
  );
};
export default VideoIcon;
