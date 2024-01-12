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
      <Path d="M18.916 5.117V2.789h-1.5v2.328h-2.328v1.5h2.328v2.328h1.5V6.617h2.327v-1.5h-2.327z" />
      <Path d="M7.34 3.109h6.516a5.211 5.211 0 005.06 7.763v10.004l-6.913-2.968-6.913 2.968V5.359a2.25 2.25 0 012.25-2.25z" />
    </Svg>
  );
};
const BookmarkAddIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BookmarkAddIcon;
