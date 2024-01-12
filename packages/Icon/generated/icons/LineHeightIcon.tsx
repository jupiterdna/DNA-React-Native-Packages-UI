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
      <Path d="M10.34 7.47L6.196 3.325 2.05 7.47l1.06 1.06 2.335-2.333v11.635L3.11 15.498l-1.06 1.06 4.145 4.145 4.144-4.144-1.06-1.061-2.334 2.334V6.197L9.28 8.53l1.06-1.061zM12.444 5.75h9.506v-1.5h-9.506v1.5zM21.95 12.75h-9.506v-1.5h9.506v1.5zM12.444 19.75h9.506v-1.5h-9.506v1.5z" />
    </Svg>
  );
};
const LineHeightIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LineHeightIcon;
