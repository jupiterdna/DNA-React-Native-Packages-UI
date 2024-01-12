//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const CameraFrontIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M9.299 2.968H14.7l2.037 2.245h2.992a2.25 2.25 0 012.25 2.25v11.319a2.25 2.25 0 01-2.25 2.25H4.27a2.25 2.25 0 01-2.25-2.25V7.462a2.25 2.25 0 012.25-2.25h2.992l2.037-2.244zM12 13.043c.527 0 .976-.184 1.346-.554.37-.37.554-.819.554-1.346 0-.527-.185-.975-.554-1.345A1.832 1.832 0 0012 9.243c-.527 0-.975.185-1.345.555-.37.37-.555.818-.555 1.345s.185.976.555 1.346c.37.37.818.554 1.345.554zm-3.854 3.908h7.708v-.458c0-.7-.35-1.257-1.052-1.67-.701-.415-1.635-.622-2.802-.622-1.166 0-2.1.207-2.802.621-.7.414-1.052.971-1.052 1.671v.458z" />
    </Svg>
  );
};
export default CameraFrontIcon;
