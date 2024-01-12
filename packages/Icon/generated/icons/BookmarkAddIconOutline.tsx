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
      <Path d="M18.915 5.12V2.794h-1.5v2.328h-2.328v1.5h2.328v2.328h1.5V6.62h2.328v-1.5h-2.328z" />
      <Path d="M6.589 5.363a.75.75 0 01.75-.75h5.763v-1.5H7.339a2.25 2.25 0 00-2.25 2.25V20.88l6.913-2.968 6.913 2.968v-9.94h-1.5v7.663l-5.413-2.324-5.413 2.324V5.363z" />
    </Svg>
  );
};
const BookmarkAddIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BookmarkAddIconOutline;
