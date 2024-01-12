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
      <Path d="M6.301 7.29a4.074 4.074 0 114.074 4.074A4.074 4.074 0 016.3 7.29zM2.125 17.338v3.448h10.24A6.729 6.729 0 0110.375 16c0-.912.18-1.78.508-2.574a16.169 16.169 0 00-.508-.008c-2.097 0-4.075.409-5.553 1.047-.737.319-1.384.708-1.858 1.162-.468.447-.839 1.028-.839 1.711zM17.125 11.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm.765 2.678v1.767l1.43 1.43-1.06 1.062-1.87-1.87v-2.39h1.5z" />
    </Svg>
  );
};
const UserClockIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserClockIcon;
