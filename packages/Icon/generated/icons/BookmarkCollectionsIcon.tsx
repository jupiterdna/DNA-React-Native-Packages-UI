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
      <Path d="M5.53 4.75A2.25 2.25 0 017.78 2.5h11.47a2.25 2.25 0 012.25 2.25v11.465a2.25 2.25 0 01-2.25 2.25H7.78a2.25 2.25 0 01-2.25-2.25V4.75zM17.647 4H12.38v7.629l2.636-1.562 2.63 1.533V4z" />
      <Path d="M18.474 20H6.249a2.25 2.25 0 01-2.25-2.25V5.523h-1.5V17.75a3.75 3.75 0 003.75 3.75h12.225V20z" />
    </Svg>
  );
};
const BookmarkCollectionsIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BookmarkCollectionsIcon;
