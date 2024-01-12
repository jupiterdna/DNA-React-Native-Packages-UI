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
      <Path d="M15.844 9.703l-.848-2.5-.851 2.5h-2.58l2.107 1.69-.857 2.605 2.177-1.622 2.166 1.622-.822-2.61 2.037-1.685h-2.53z" />
      <Path d="M12.996 4.174h8.744l-2.949 15.652H2.261L12.997 4.174zm.79 1.5L5.108 18.326h12.438l2.385-12.652h-6.147z" />
    </Svg>
  );
};
const MilitaryTailNumberIconOutline = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default MilitaryTailNumberIconOutline;
