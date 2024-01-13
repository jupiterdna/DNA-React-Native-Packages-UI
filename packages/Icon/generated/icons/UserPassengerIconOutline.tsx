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
      <Path d="M7.926 7.29A4.074 4.074 0 1112 11.363 4.074 4.074 0 017.926 7.29zM12 4.713a2.575 2.575 0 100 5.15 2.575 2.575 0 000-5.15z" />
      <Path d="M3.75 17.338v3.448h16.5v-3.448c0-.683-.37-1.264-.84-1.712-.473-.453-1.12-.842-1.857-1.16-1.479-.64-3.457-1.048-5.553-1.048-.808 0-1.6.06-2.35.172L3.03 6.972v2.121l4.866 4.866c-.521.145-1.008.315-1.45.506-.737.319-1.384.708-1.858 1.162-.468.447-.839 1.028-.839 1.711zm5.39-2.136l4.084 4.084H5.249v-1.948c0-.115.065-.33.376-.627.304-.29.78-.594 1.416-.869.6-.258 1.312-.48 2.1-.64zm6.205 4.084l-4.334-4.335c.324-.022.654-.033.989-.033 1.919 0 3.691.377 4.959.924.636.275 1.112.578 1.416.87.31.296.375.51.375.626v1.948h-3.405z" />
    </Svg>
  );
};
const UserPassengerIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserPassengerIconOutline;
