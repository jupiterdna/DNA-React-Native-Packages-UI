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
      <Path d="M9.299 2.968H14.7l2.037 2.245h2.992a2.25 2.25 0 012.25 2.25v11.319a2.25 2.25 0 01-2.25 2.25H4.27a2.25 2.25 0 01-2.25-2.25V7.462a2.25 2.25 0 012.25-2.25h2.992l2.037-2.244zm.664 1.5L7.926 6.713H4.27a.75.75 0 00-.75.75v11.319c0 .414.335.75.75.75H19.73a.75.75 0 00.75-.75V7.462a.75.75 0 00-.75-.75h-3.656l-2.037-2.244H9.963z" />
      <Path d="M15.854 16.951H8.146v-.458c0-.7.351-1.257 1.052-1.67.702-.415 1.636-.622 2.802-.622 1.167 0 2.1.207 2.802.621.702.414 1.052.971 1.052 1.671v.458zM13.346 12.489c-.37.37-.819.554-1.346.554-.527 0-.975-.184-1.345-.554a1.832 1.832 0 01-.555-1.346c0-.527.185-.975.555-1.345.37-.37.818-.555 1.345-.555s.976.185 1.346.555c.37.37.554.818.554 1.345s-.185.976-.554 1.346z" />
    </Svg>
  );
};
const CameraFrontIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default CameraFrontIconOutline;
