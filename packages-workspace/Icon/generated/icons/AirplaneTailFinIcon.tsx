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
      <Path d="M21.74 4.174h-8.744L2.262 19.826H18.79l2.95-15.652zM14.744 13.6a2.125 2.125 0 110-4.25 2.125 2.125 0 010 4.25z" />
    </Svg>
  );
};
const AirplaneTailFinIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default AirplaneTailFinIcon;
