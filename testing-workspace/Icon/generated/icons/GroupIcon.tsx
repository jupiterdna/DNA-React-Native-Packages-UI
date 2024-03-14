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
      <Path d="M5.177 7.29a4.075 4.075 0 118.15 0 4.075 4.075 0 01-8.15 0zM.999 17.338v3.448h16.506v-3.448c0-.683-.371-1.264-.84-1.712-.474-.453-1.12-.842-1.858-1.16-1.48-.64-3.458-1.048-5.555-1.048-2.097 0-4.076.409-5.555 1.047-.738.319-1.384.708-1.859 1.162C1.37 16.073 1 16.654 1 17.337z" />
      <Path d="M14.827 7.29a5.555 5.555 0 01-1.51 3.815 4.074 4.074 0 005.508-3.816 4.074 4.074 0 00-5.509-3.815 5.555 5.555 0 011.51 3.815zM19.005 17.338v3.448H23v-3.448a1.98 1.98 0 00-.2-.856 2.95 2.95 0 00-.639-.855c-.475-.454-1.121-.843-1.858-1.162-1.128-.486-2.545-.84-4.085-.98.541.295 1.05.644 1.482 1.057.625.596 1.304 1.543 1.304 2.796z" />
    </Svg>
  );
};
const GroupIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default GroupIcon;
