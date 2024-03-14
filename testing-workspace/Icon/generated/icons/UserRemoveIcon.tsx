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
      <Path d="M9.003 3.21a4.075 4.075 0 100 8.15 4.075 4.075 0 000-8.15zM.75 17.334v3.447h16.506v-3.447c0-.683-.371-1.264-.84-1.712-.474-.453-1.12-.843-1.858-1.161-1.48-.638-3.458-1.047-5.555-1.047-2.097 0-4.076.409-5.555 1.047-.738.318-1.384.708-1.859 1.161-.468.448-.839 1.029-.839 1.712zM22.074 9.02h-5.602v1.5h5.602v-1.5z" />
    </Svg>
  );
};
const UserRemoveIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserRemoveIcon;
