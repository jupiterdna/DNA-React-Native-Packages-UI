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
      <Path d="M3.123 4h1v2h-1v1h3V6h-1V3h-2v1zM3.123 10v1h2v.5h-2V14h3v-1h-2v-.5h2V10h-3zM3.123 17v1h2v.5h-2v1h2v.5h-2v1h3v-4h-3zM8.361 5.75h12.516v-1.5H8.361v1.5zM8.361 12.75h12.516v-1.5H8.361v1.5zM20.877 19.75H8.361v-1.5h12.516v1.5z" />
    </Svg>
  );
};
const ListOrderedIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default ListOrderedIcon;
