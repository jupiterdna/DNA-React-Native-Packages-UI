//generated file
import * as React from "react";
import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";
interface Props extends SvgProps {
  size?: NumberProp;
}
const JobTitleIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M10.375 2.147a2.25 2.25 0 00-2.25 2.25v1.967H4.249a2.25 2.25 0 00-2.25 2.25v10.35a2.25 2.25 0 002.25 2.25h15.5a2.25 2.25 0 002.25-2.25V8.614a2.25 2.25 0 00-2.25-2.25h-3.876V4.398a2.25 2.25 0 00-2.25-2.25h-3.248zm3.998 4.217H9.625V4.397a.75.75 0 01.75-.75h3.248a.75.75 0 01.75.75v1.967zm-1.028 6.816c-.37.37-.819.555-1.346.555-.527 0-.975-.185-1.345-.555a1.832 1.832 0 01-.555-1.345c0-.527.185-.976.555-1.345.37-.37.818-.555 1.345-.555s.976.185 1.346.555c.37.37.554.818.554 1.345s-.185.976-.554 1.345zm2.508 4.463H8.146v-.458c0-.7.35-1.257 1.051-1.671.702-.414 1.636-.621 2.802-.621 1.167 0 2.101.207 2.802.62.701.415 1.052.972 1.052 1.672v.458z" />
    </Svg>
  );
};
export default JobTitleIcon;
