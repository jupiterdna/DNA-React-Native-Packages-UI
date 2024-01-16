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
      <Path d="M3.857 8.545a1.226 1.226 0 100-2.453 1.226 1.226 0 000 2.453zM7.191 8.068h14.18v-1.5H7.191v1.5zM7.191 12.757h14.18v-1.5H7.191v1.5zM21.371 17.446H7.191v-1.5h14.18v1.5zM5.084 12.007a1.226 1.226 0 11-2.453 0 1.226 1.226 0 012.453 0zM3.857 17.922a1.227 1.227 0 100-2.453 1.227 1.227 0 000 2.453z" />
    </Svg>
  );
};
const ListIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ListIcon;
