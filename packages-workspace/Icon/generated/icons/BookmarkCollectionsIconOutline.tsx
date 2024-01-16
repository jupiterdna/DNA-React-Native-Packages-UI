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
      <Path d="M5.53 4.75A2.25 2.25 0 017.78 2.5h11.47a2.25 2.25 0 012.25 2.25v11.465a2.25 2.25 0 01-2.25 2.25H7.78a2.25 2.25 0 01-2.25-2.25V4.75zM7.78 4a.75.75 0 00-.75.75v11.465c0 .415.336.75.75.75h11.47a.75.75 0 00.75-.75V4.75a.75.75 0 00-.75-.75h-1.604v7.6l-2.63-1.533-2.636 1.562V4h-4.6zm6.1 0v4.997l1.13-.67 1.136.663V4H13.88z" />
      <Path d="M6.249 20h12.225v1.5H6.249a3.75 3.75 0 01-3.75-3.75V5.523h1.5V17.75A2.25 2.25 0 006.249 20z" />
    </Svg>
  );
};
const BookmarkCollectionsIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BookmarkCollectionsIconOutline;
