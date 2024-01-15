//this is auto-generated files please do not edit!
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const wrapper = (props: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M5.884 3.791a5.874 5.874 0 018.52 7.21l6.264 6.263a.75.75 0 010 1.061l-2.177 2.177a.75.75 0 01-1.06 0l-6.265-6.265a5.873 5.873 0 01-7.208-8.519l3.627 3.627L9.51 7.418 5.884 3.791zm5.218 3.097a.75.75 0 010 1.06l-2.987 2.988a.75.75 0 01-1.06 0L4.6 8.482a4.374 4.374 0 006.38 4.19l.487-.254 6.493 6.493 1.116-1.116-6.492-6.492.254-.488a4.374 4.374 0 00-4.193-6.383l2.456 2.456z" />
    </Svg>
  );
};
const WrenchIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default WrenchIconOutline;
