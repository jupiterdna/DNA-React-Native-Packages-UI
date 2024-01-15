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
      <Path d="M6.589 5.367a.75.75 0 01.75-.75h5.757v-1.5H7.339a2.25 2.25 0 00-2.25 2.25v15.517l6.913-2.968 6.913 2.968v-9.97h-1.5v7.694l-5.413-2.324-5.413 2.324V5.368z" />
      <Path d="M15.087 6.625h6.155v-1.5h-6.155v1.5z" />
    </Svg>
  );
};
const BookmarkRemoveIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BookmarkRemoveIconOutline;
