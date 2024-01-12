//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const PaintBucketIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M6.432 1.6l2.413 2.414-5.138 5.138a1.75 1.75 0 000 2.475l4.961 4.96a1.75 1.75 0 002.475 0l4.961-4.96a1.75 1.75 0 000-2.475L7.492.54 6.432 1.6zm-1.664 8.613l5.138-5.138 5.137 5.138c.046.045.07.104.073.163H4.695a.249.249 0 01.073-.163zM2.111 23.49h19.77v-2.5H2.111v2.5zM17.252 15.506c0-.733.489-1.615.974-2.31.477-.684.951-1.186.951-1.186s.474.503.95 1.186c.486.695.975 1.577.975 2.31a1.925 1.925 0 11-3.85 0z" />
    </Svg>
  );
};
export default PaintBucketIcon;
