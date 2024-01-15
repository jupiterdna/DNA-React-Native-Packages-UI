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
      <Path d="M8.136 9.502a3.865 3.865 0 117.729.001 3.865 3.865 0 01-7.73 0z" />
      <Path d="M1.75 12C1.75 6.34 6.339 1.75 12 1.75S22.25 6.34 22.25 12 17.661 22.25 12 22.25 1.75 17.66 1.75 12zM12 3.25a8.75 8.75 0 00-6.747 14.322c1.879-1.608 4.237-2.574 6.809-2.574 2.538 0 4.869.941 6.736 2.512A8.75 8.75 0 0012 3.25z" />
    </Svg>
  );
};
const UserCircleIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default UserCircleIcon;
