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
      <Path d="M4.544 6.335a1.335 1.335 0 100-2.67 1.335 1.335 0 000 2.67zM8.276 5.75h12.516v-1.5H8.276v1.5zM8.276 12.75h12.516v-1.5H8.276v1.5zM20.792 19.75H8.276v-1.5h12.516v1.5zM5.879 12a1.335 1.335 0 11-2.67 0 1.335 1.335 0 012.67 0zM4.544 20.336a1.335 1.335 0 100-2.67 1.335 1.335 0 000 2.67z" />
    </Svg>
  );
};
const ListUnorderedIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ListUnorderedIcon;
