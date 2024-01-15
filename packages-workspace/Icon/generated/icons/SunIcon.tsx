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
      <Path d="M11.25 5.532V1.778h1.5v3.754h-1.5zM11.25 22.222v-3.755h1.5v3.755h-1.5zM22.223 11.25h-3.755v1.5h3.755v-1.5zM1.777 11.25h3.755v1.5H1.777v-1.5zM18.698 4.241l-2.655 2.655 1.06 1.061 2.656-2.655-1.06-1.06zM4.241 18.698l2.655-2.655 1.061 1.06-2.655 2.656-1.06-1.06zM19.759 18.698l-2.655-2.655-1.061 1.06 2.655 2.656 1.06-1.06zM5.302 4.241l2.655 2.655-1.06 1.061L4.24 5.302l1.06-1.06zM6.821 11.998a5.179 5.179 0 1110.357 0 5.179 5.179 0 01-10.357 0z" />
    </Svg>
  );
};
const SunIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SunIcon;
