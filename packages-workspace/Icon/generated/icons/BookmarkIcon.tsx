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
      <Path d="M5.087 5.367a2.25 2.25 0 012.25-2.25h9.326a2.25 2.25 0 012.25 2.25v15.517L12 17.916l-6.913 2.968V5.367z" />
    </Svg>
  );
};
const BookmarkIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BookmarkIcon;
