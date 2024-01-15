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
      <Path d="M12.041 4.25a7.751 7.751 0 00-6.982 4.383h3.98v1.5H2.711V3.804h1.5v3.27A9.25 9.25 0 112.845 13h1.51a7.751 7.751 0 0015.436-1.001 7.75 7.75 0 00-7.75-7.75z" />
      <Path d="M10.701 6.6h1.5v5.08l3.567 3.567-1.06 1.06-4.007-4.006v-5.7z" />
    </Svg>
  );
};
const HistoryIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default HistoryIcon;
