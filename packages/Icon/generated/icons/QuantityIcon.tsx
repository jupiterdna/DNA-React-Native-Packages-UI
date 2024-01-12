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
      <Path d="M9.244 5.89a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM5.695 11.996a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM12.781 11.996a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM9.244 18.11a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM16.336 18.11a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0zM2.164 18.11a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0z" />
    </Svg>
  );
};
const QuantityIcon = ({ size = 24, ...iprops }: Props) => {
  const newProps = {
    ...iprops,
    width: size,
    height: size,
  };
  return wrapper(newProps);
};
export default QuantityIcon;
