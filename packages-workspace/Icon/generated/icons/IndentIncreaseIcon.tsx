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
      <Path d="M20.748 5.75H3.252v-1.5h17.496v1.5zM20.748 10.75h-9.491v-1.5h9.491v1.5zM11.257 15.75h9.491v-1.5h-9.491v1.5zM20.748 20.75H3.252v-1.5h17.496v1.5zM7 12.5L3 9v7l4-3.5z" />
    </Svg>
  );
};
const IndentIncreaseIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default IndentIncreaseIcon;
