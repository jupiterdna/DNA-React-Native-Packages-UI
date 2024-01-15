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
      <Path d="M7.02 7.29a2.575 2.575 0 115.15 0 2.575 2.575 0 01-5.15 0zm2.575-4.075a4.075 4.075 0 100 8.15 4.075 4.075 0 000-8.15zm9.442 0v9.754l3.62-3.792L21.57 8.14l-1.034 1.084v-6.01h-1.5zm-.998 9.787V3.246L14.42 7.04l1.086 1.035 1.034-1.083v6.01h1.5zm-14.822 3.71c-.31.296-.375.511-.375.627v1.947h13.506V17.34c0-.116-.065-.33-.376-.627-.304-.291-.78-.595-1.417-.87-1.268-.546-3.04-.924-4.96-.924s-3.693.378-4.96.925c-.637.274-1.113.578-1.418.869zm-1.875 4.074V17.34c0-.684.37-1.264.84-1.712.474-.453 1.12-.843 1.858-1.161 1.479-.639 3.457-1.048 5.555-1.048 2.097 0 4.076.41 5.555 1.048.737.318 1.384.708 1.858 1.161.469.447.84 1.028.84 1.712v3.447H1.342z" />
    </Svg>
  );
};
const UserGroupByIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserGroupByIconOutline;
