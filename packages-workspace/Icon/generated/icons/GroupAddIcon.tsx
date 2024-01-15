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
      <Path d="M4.678 7.285a4.075 4.075 0 118.15 0 4.075 4.075 0 01-8.15 0zM.5 17.334v3.447h16.506v-3.447c0-.684-.371-1.264-.84-1.712-.474-.453-1.12-.843-1.858-1.161-1.48-.639-3.458-1.047-5.555-1.047-2.097 0-4.076.409-5.555 1.047-.738.318-1.384.708-1.859 1.161C.871 16.07.5 16.65.5 17.334zM21.447 9.111h2.05v1.5h-2.05v2.051h-1.5v-2.05h-2.05v-1.5h2.05V7.06h1.5v2.05z" />
      <Path d="M14.326 7.286a5.56 5.56 0 01-1.764 4.07 4.075 4.075 0 10-.002-8.141 5.56 5.56 0 011.766 4.071zM18.505 20.781v-3.446c0-1.254-.68-2.2-1.304-2.796a6.39 6.39 0 00-.94-.735c.749.172 1.44.395 2.046.657.737.318 1.384.708 1.858 1.161.469.448.84 1.028.84 1.712v3.447h-2.5z" />
    </Svg>
  );
};
const GroupAddIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default GroupAddIcon;
