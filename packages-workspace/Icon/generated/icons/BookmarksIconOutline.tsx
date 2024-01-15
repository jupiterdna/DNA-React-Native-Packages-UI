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
      <Path d="M5.337 3.501H16.35a2.25 2.25 0 012.25 2.25V20.41h1.5V5.75a3.75 3.75 0 00-3.75-3.75H5.337v1.5z" />
      <Path d="M6.148 4.886a2.25 2.25 0 00-2.25 2.25v14.863l6.66-2.86 6.66 2.86V7.136a2.25 2.25 0 00-2.25-2.25h-8.82zm-.75 2.25a.75.75 0 01.75-.75h8.82a.75.75 0 01.75.75v12.587l-5.16-2.216-5.16 2.216V7.136z" />
    </Svg>
  );
};
const BookmarksIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BookmarksIconOutline;
