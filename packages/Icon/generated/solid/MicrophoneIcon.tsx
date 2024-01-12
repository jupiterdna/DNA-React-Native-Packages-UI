//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const MicrophoneIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M9.262 5.173a2.738 2.738 0 015.475 0v6.02a2.738 2.738 0 11-5.475 0v-6.02z" />
      <Path d="M12.75 18.368a7.251 7.251 0 006.49-6.895H17.74A5.75 5.75 0 0112 16.906a5.75 5.75 0 01-5.738-5.433H4.76a7.252 7.252 0 006.49 6.895v3.197h1.5v-3.197z" />
    </Svg>
  );
};
export default MicrophoneIcon;
