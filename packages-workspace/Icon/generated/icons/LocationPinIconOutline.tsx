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
      <Path d="M9.935 8.904a2.066 2.066 0 114.13 0 2.066 2.066 0 01-4.13 0z" />
      <Path d="M4.912 9.055c0-3.715 3.148-7.224 7.097-7.224 3.953 0 7.078 3.512 7.078 7.224 0 2.4-1.49 4.552-2.97 6.155a26.867 26.867 0 01-2.191 2.093c-.27.234-.51.435-.713.607-.312.263-.546.46-.694.605l-.525.513-.524-.513c-.149-.145-.38-.34-.69-.602-.205-.173-.444-.375-.716-.61a26.81 26.81 0 01-2.188-2.093c-1.477-1.604-2.964-3.756-2.964-6.155zm7.097-5.724c-3.058 0-5.597 2.773-5.597 5.724 0 1.806 1.145 3.594 2.568 5.14a25.329 25.329 0 002.065 1.973c.217.188.43.369.63.536l.32.272c.1-.087.21-.179.324-.275.198-.167.41-.347.626-.533a25.408 25.408 0 002.07-1.974c1.425-1.546 2.572-3.334 2.572-5.139 0-2.954-2.522-5.724-5.578-5.724zM4.93 22.169h14.15v-1.5H4.93v1.5z" />
    </Svg>
  );
};
const LocationPinIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default LocationPinIconOutline;
