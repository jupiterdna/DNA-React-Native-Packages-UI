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
      <Path d="M15.94 6.128H3v1.5h12.938v-1.5zM12.84 11.25H3v1.5h9.838v-1.5zM3.001 16.371h12.938v1.5H3.001v-1.5zM17.282 11.996l3.717-3.718-1.061-1.06-4.777 4.778 4.774 4.776 1.061-1.06-3.714-3.716z" />
    </Svg>
  );
};
const MenuHamburgerOpenIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MenuHamburgerOpenIcon;
