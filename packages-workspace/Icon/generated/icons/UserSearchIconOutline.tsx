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
      <Path d="M5.428 7.285a4.074 4.074 0 114.074 4.075 4.074 4.074 0 01-4.074-4.075zM9.502 4.71a2.575 2.575 0 100 5.15 2.575 2.575 0 000-5.15zM1.252 17.334v3.447h11.185a5.976 5.976 0 01-1.16-1.5H2.751v-1.947c0-.116.065-.33.376-.627.304-.291.78-.594 1.416-.869 1.268-.547 3.04-.924 4.959-.924.42 0 .834.018 1.237.052.13-.513.328-1 .582-1.45-.59-.067-1.199-.102-1.819-.102-2.097 0-4.075.409-5.553 1.047-.737.318-1.384.708-1.858 1.161-.468.448-.84 1.028-.84 1.712zM16.508 12.486a3.952 3.952 0 102.228 7.217l2.952 2.952 1.06-1.06-2.956-2.957a3.952 3.952 0 00-3.284-6.151zm-2.452 3.952a2.452 2.452 0 114.904 0 2.452 2.452 0 01-4.904 0z" />
    </Svg>
  );
};
const UserSearchIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserSearchIconOutline;
