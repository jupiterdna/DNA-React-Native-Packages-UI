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
      <Path d="M11.999 3.214a4.075 4.075 0 100 8.15 4.075 4.075 0 000-8.15zM3.746 17.338v3.447h6.536l.727-4.487-.586-1.308L12 13.83l1.577 1.16-.586 1.308.727 4.488h6.534v-3.448c0-.683-.37-1.264-.84-1.712-.474-.453-1.12-.843-1.858-1.16-1.479-.64-3.458-1.048-5.555-1.048-2.097 0-4.076.409-5.555 1.047-.737.318-1.384.708-1.859 1.161-.468.448-.839 1.029-.839 1.712z" />
    </Svg>
  );
};
const UserManagerIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserManagerIcon;
