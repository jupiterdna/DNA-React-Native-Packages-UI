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
      <Path d="M6.38 2v1.495H4.655a1.59 1.59 0 00-1.59 1.589v.972a5.934 5.934 0 004.124 5.651 5.638 5.638 0 002.855 2.366v3.499H8.441a1.5 1.5 0 00-1.5 1.5V22H17.06v-2.928a1.5 1.5 0 00-1.5-1.5h-1.602v-3.499a5.638 5.638 0 002.855-2.366 5.934 5.934 0 004.123-5.65v-.973a1.59 1.59 0 00-1.589-1.59H17.62V2H6.381zm9.74 1.5v5.304a4.12 4.12 0 01-8.24 0V3.5h8.24zm1.5 1.495h1.726c.05 0 .09.04.09.089v.972c0 1.5-.745 2.825-1.885 3.627.045-.286.068-.58.068-.879v-3.81zm-12.966 0H6.38v3.81c0 .298.023.592.068.878a4.426 4.426 0 01-1.885-3.627v-.972c0-.05.04-.09.09-.09zm7.803 12.577h-.914v-3.167a5.663 5.663 0 00.914 0v3.167zM8.441 20.5v-1.428h7.118V20.5H8.44z" />
    </Svg>
  );
};
const AwardTrophyIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AwardTrophyIconOutline;
