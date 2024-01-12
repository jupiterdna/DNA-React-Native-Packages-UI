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
      <Path d="M6.301 7.29a4.074 4.074 0 114.074 4.074A4.074 4.074 0 016.3 7.29zm4.074-2.576a2.575 2.575 0 100 5.15 2.575 2.575 0 000-5.15zM2.125 17.338v3.448h10.24a6.771 6.771 0 01-1.138-1.5H3.624v-1.948c0-.115.065-.33.376-.627.304-.29.78-.594 1.416-.869 1.268-.547 3.04-.924 4.959-.924h.086c.084-.52.227-1.02.422-1.492a16.169 16.169 0 00-.508-.008c-2.097 0-4.075.409-5.553 1.047-.737.319-1.384.708-1.858 1.162-.468.447-.839 1.028-.839 1.711zM16.39 13.928h1.5v1.767l1.43 1.43-1.06 1.062-1.87-1.87v-2.39z" />
      <Path d="M17.125 11.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM13.875 16a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z" />
    </Svg>
  );
};
const UserClockIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserClockIconOutline;
