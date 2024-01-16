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
      <Path d="M16.5 3.5h-15v17h15v-17zM22.5 3.5h-4.502v4.498H22.5V3.5zM17.998 9.751H22.5v4.498h-4.502V9.751zM22.5 16.002h-4.502V20.5H22.5v-4.498z" />
    </Svg>
  );
};
const DrawerOpenIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default DrawerOpenIcon;
