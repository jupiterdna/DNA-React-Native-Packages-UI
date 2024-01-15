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
      <Path d="M10.394 3.48a1.598 1.598 0 113.195 0v.677c.7.186 1.35.492 1.93.894l-.17.17.004.005-5.077 5.077v5.014h5.015l2.884-2.883v4.982H20.2v1.5H3.8v-1.5h2.014v-7.287a6.183 6.183 0 014.58-5.97v-.68zM14.124 20.35a2.126 2.126 0 11-4.253 0h4.253zM18.682 4.646a1.07 1.07 0 011.514 0l.739.739a1.07 1.07 0 010 1.514l-.576.576-2.253-2.253.576-.576z" />
      <Path d="M17.604 5.733l2.258 2.257-5.378 5.378h-2.257V11.11l5.377-5.378z" />
    </Svg>
  );
};
const BellEditIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default BellEditIcon;
