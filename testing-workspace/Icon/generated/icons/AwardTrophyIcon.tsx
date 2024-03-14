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
      <Path d="M16.812 11.707a5.638 5.638 0 01-2.855 2.366v3.499h1.602a1.5 1.5 0 011.5 1.5V22H6.94v-2.928a1.5 1.5 0 011.5-1.5h1.602v-3.499a5.638 5.638 0 01-2.855-2.366 5.934 5.934 0 01-4.124-5.65v-.973c0-.878.712-1.59 1.59-1.59H6.38V2h11.238v1.495h1.727c.878 0 1.59.711 1.59 1.589v.972a5.934 5.934 0 01-4.124 5.651zm2.534-6.712H17.62v3.81c0 .298-.023.592-.068.878a4.426 4.426 0 001.885-3.627v-.972a.09.09 0 00-.09-.09zM6.45 9.683a5.661 5.661 0 01-.068-.879v-3.81H4.654a.09.09 0 00-.09.09v.972c0 1.5.745 2.825 1.885 3.627z" />
    </Svg>
  );
};
const AwardTrophyIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AwardTrophyIcon;
