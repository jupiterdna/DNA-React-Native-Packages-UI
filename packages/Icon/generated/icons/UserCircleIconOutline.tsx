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
      <Path d="M8.136 9.502a3.864 3.864 0 117.728 0 3.864 3.864 0 01-7.728 0zM12 7.138a2.364 2.364 0 100 4.729 2.364 2.364 0 000-4.729z" />
      <Path d="M1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM12 3.25a8.75 8.75 0 00-6.747 14.322c1.88-1.608 4.238-2.574 6.809-2.574 2.537 0 4.868.941 6.736 2.512A8.75 8.75 0 0012 3.25zm5.754 15.343c-1.607-1.325-3.575-2.095-5.692-2.095-2.145 0-4.137.79-5.755 2.147A8.716 8.716 0 0012 20.75a8.716 8.716 0 005.754-2.157z" />
    </Svg>
  );
};
const UserCircleIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserCircleIconOutline;
