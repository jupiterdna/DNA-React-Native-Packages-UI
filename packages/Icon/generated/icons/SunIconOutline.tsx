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
      <Path d="M11.25 5.532V1.778h1.5v3.754h-1.5zM6.821 11.998a5.179 5.179 0 1110.358 0 5.179 5.179 0 01-10.358 0zM12 8.318a3.679 3.679 0 100 7.358 3.679 3.679 0 000-7.357zM11.25 18.468v3.754h1.5v-3.755h-1.5zM18.468 11.25h3.755v1.5h-3.755v-1.5zM5.532 11.25H1.777v1.5h3.755v-1.5zM16.043 6.896l2.655-2.655 1.06 1.06-2.654 2.656-1.06-1.06zM6.896 16.043l-2.655 2.655 1.061 1.061 2.655-2.655-1.06-1.06zM17.104 16.043l2.655 2.655-1.06 1.06-2.656-2.654 1.06-1.06zM7.957 6.896L5.302 4.241l-1.06 1.061 2.654 2.655 1.061-1.06z" />
    </Svg>
  );
};
const SunIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default SunIconOutline;
