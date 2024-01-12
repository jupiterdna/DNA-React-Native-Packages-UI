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
      <Path d="M3.441 8.901h3.22v6.2h-1.5v-4.7h-1.72v-1.5zM15.092 8.901h3.917c.58 0 1.05.47 1.05 1.05v4.104c0 .58-.47 1.05-1.05 1.05h-3.917v-1.5h3.467v-.852h-2.574v-1.5h2.574V10.4h-3.467v-1.5zM12.303 8.901H8.64v1.5h3.215v.837H9.689c-.58 0-1.05.47-1.05 1.05v2.817h4.715v-1.5h-3.215v-.867h2.165c.58 0 1.05-.47 1.05-1.05V9.951c0-.58-.47-1.05-1.05-1.05z" />
    </Svg>
  );
};
const NumberIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default NumberIcon;
