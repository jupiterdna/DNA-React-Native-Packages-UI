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
      <Path d="M4.25 2A2.25 2.25 0 002 4.25v15.5A2.25 2.25 0 004.25 22h8.256A6.722 6.722 0 0111 17.75c0-1.412.433-2.722 1.174-3.806l-.44-.577 2.893-2.22.343.45A6.726 6.726 0 0117.75 11c1.61 0 3.09.564 4.25 1.506V4.25A2.25 2.25 0 0019.75 2H4.25zm13.275 3.726l.169 1.208-.018.007-.056.02a47.028 47.028 0 00-.997.394c-.658.265-1.557.638-2.52 1.067-.163.073-.386.32-.523.683a1.36 1.36 0 00-.094.44c-.002.08.01.117.013.125l.369.484-1.31 1.005-.592.453-.991.762-.382-.5a.407.407 0 00-.186-.104c-.073-.018-.228-.035-.482.159-.264.202-.355.415-.39.564a.798.798 0 00-.02.226l.063.362-1.2.917c-.494.377-1.2.283-1.577-.211l-1.293-1.692a1.125 1.125 0 01.211-1.576l1.146-.876.29.08a.995.995 0 00.238.01c.168-.012.405-.068.656-.26a.586.586 0 00.25-.446.779.779 0 00-.019-.236v-.003l-.144-.418 4.049-3.093 5.34.45z" />
      <Path d="M17.75 12.5a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm3.118 4.063l-3.786 3.786-2.434-2.433 1.061-1.061 1.373 1.373 2.725-2.726 1.06 1.06z" />
    </Svg>
  );
};
const EquipmentModelAndVersionIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default EquipmentModelAndVersionIcon;
